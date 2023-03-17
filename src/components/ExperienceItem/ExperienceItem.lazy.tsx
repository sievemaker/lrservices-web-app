import React, { lazy, Suspense } from 'react';

const LazyExperienceItem = lazy(() => import('./ExperienceItem'));

const ExperienceItem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExperienceItem {...props} />
  </Suspense>
);

export default ExperienceItem;
