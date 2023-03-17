import React, { lazy, Suspense } from 'react';

const LazyLargeScreenAppBar = lazy(() => import('./LargeScreenAppBar'));

const LargeScreenAppBar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLargeScreenAppBar {...props} />
  </Suspense>
);

export default LargeScreenAppBar;
