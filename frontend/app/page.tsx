'use client';

import React from 'react';
import { WizardLayout } from '@/components/WizardLayout';
import { useWizardStore } from '@/store/wizardStore';
import IntroStep from '@/components/steps/IntroStep';
import BusinessInfoStep from '@/components/steps/BusinessInfoStep';
import ReviewStep from '@/components/steps/ReviewStep';

export default function Home() {
  const { currentStep } = useWizardStore();

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <IntroStep />;
      case 1:
        return <BusinessInfoStep />;
      case 2:
        return <ReviewStep />;
      default:
        return <IntroStep />;
    }
  };

  return (
    <main>
      <WizardLayout>
        {renderStep()}
      </WizardLayout>
    </main>
  );
}
