import React, { lazy, Suspense } from 'react';

const LazyLinkedInLink = lazy(() => import('./LinkedInLink'));

const LinkedInLink = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLinkedInLink {...props} />
  </Suspense>
);

export default LinkedInLink;
