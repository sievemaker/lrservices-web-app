import React, { lazy, Suspense } from 'react';

const LazyPricingPage = lazy(() => import('./PricingPage'));

const PricingPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPricingPage {...props} />
  </Suspense>
);

export default PricingPage;
