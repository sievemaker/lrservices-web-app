import React, { lazy, Suspense } from 'react';

const LazyExperiences = lazy(() => import('./Experiences'));

const Experiences = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExperiences {...props} />
  </Suspense>
);

export default Experiences;
