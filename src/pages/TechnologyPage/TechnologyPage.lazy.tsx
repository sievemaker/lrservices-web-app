import React, { lazy, Suspense } from 'react';

const LazyTechnologyPage = lazy(() => import('./TechnologyPage'));

const TechnologyPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTechnologyPage {...props} />
  </Suspense>
);

export default TechnologyPage;
