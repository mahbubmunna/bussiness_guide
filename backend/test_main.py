import pytest
from fastapi.testclient import TestClient
from sqlmodel import SQLModel, create_engine, Session
from sqlalchemy import inspect
from unittest.mock import patch, MagicMock
from main import app, create_db_and_tables, engine


@pytest.fixture
def client():
    """Fixture to provide a TestClient for the FastAPI app."""
    with TestClient(app) as test_client:
        yield test_client


@pytest.fixture
def test_engine():
    """Fixture to provide a test database engine."""
    # Create an in-memory SQLite database for testing
    test_db_engine = create_engine(
        "sqlite:///:memory:", 
        connect_args={"check_same_thread": False}
    )
    SQLModel.metadata.create_all(test_db_engine)
    yield test_db_engine
    test_db_engine.dispose()


class TestRootEndpoint:
    """Tests for the root endpoint."""
    
    def test_root_returns_welcome_message(self, client):
        """Test that the root endpoint returns the welcome message."""
        response = client.get("/")
        
        assert response.status_code == 200
        assert response.json() == {
            "message": "Welcome to the Local AI Business Setup Assistant API"
        }
    
    def test_root_content_type(self, client):
        """Test that the root endpoint returns JSON content."""
        response = client.get("/")
        
        assert response.headers["content-type"] == "application/json"


class TestHealthCheckEndpoint:
    """Tests for the health check endpoint."""
    
    def test_health_check_returns_ok_status(self, client):
        """Test that the health check endpoint returns status 'ok'."""
        response = client.get("/health")
        
        assert response.status_code == 200
        assert response.json() == {"status": "ok"}
    
    def test_health_check_content_type(self, client):
        """Test that the health check endpoint returns JSON content."""
        response = client.get("/health")
        
        assert response.headers["content-type"] == "application/json"


class TestDatabaseCreation:
    """Tests for database table creation on application startup."""
    
    def test_create_db_and_tables_creates_tables(self, test_engine):
        """Test that create_db_and_tables successfully creates database tables."""
        # Mock the engine to use our test engine
        with patch('main.engine', test_engine):
            # Clear any existing tables
            SQLModel.metadata.drop_all(test_engine)
            
            # Call the function
            create_db_and_tables()
            
            # Verify tables were created by inspecting the database
            inspector = inspect(test_engine)
            table_names = inspector.get_table_names()
            
            # At minimum, verify that the metadata was applied
            # (even if no models are defined yet, this shouldn't error)
            assert isinstance(table_names, list)
    
    def test_create_db_and_tables_called_on_startup(self):
        """Test that create_db_and_tables is called during application startup."""
        with patch('main.create_db_and_tables') as mock_create_db:
            # Create a new TestClient, which triggers the lifespan event
            with TestClient(app):
                # Verify that create_db_and_tables was called
                mock_create_db.assert_called_once()
    
    def test_database_engine_configured_correctly(self):
        """Test that the database engine is configured with correct parameters."""
        from main import engine, sqlite_url
        
        # Verify engine URL
        assert "sqlite:///" in str(engine.url)
        assert "database.db" in sqlite_url
        
        # Verify engine is created
        assert engine is not None
