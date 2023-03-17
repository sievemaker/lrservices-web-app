import React, { lazy, Suspense } from 'react';

const LazyExperienencesBox = lazy(() => import('./ExperienencesBox'));

const ExperienencesBox = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExperienencesBox {...props} />
  </Suspense>
);

export default ExperienencesBox;
