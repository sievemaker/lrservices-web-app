import React, { lazy, Suspense } from 'react';

const LazyAvailabilityPage = lazy(() => import('./AvailabilityPage'));

const AvailabilityPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAvailabilityPage {...props} />
  </Suspense>
);

export default AvailabilityPage;
