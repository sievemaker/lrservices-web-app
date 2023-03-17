import React, { lazy, Suspense } from 'react';

const LazyExperienencesTimeline = lazy(() => import('./ExperienencesTimeline'));

const ExperienencesTimeline = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExperienencesTimeline {...props} />
  </Suspense>
);

export default ExperienencesTimeline;
