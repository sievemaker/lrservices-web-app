import React, { lazy, Suspense } from 'react';

const LazySmallScreenAppBar = lazy(() => import('./SmallScreenAppBar'));

const SmallScreenAppBar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySmallScreenAppBar {...props} />
  </Suspense>
);

export default SmallScreenAppBar;
