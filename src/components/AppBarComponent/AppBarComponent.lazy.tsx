import React, { lazy, Suspense } from 'react';

const LazyAppBarComponent = lazy(() => import('./AppBarComponent'));

const AppBarComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAppBarComponent isLargeScreen={true} {...props} />
  </Suspense>
);

export default AppBarComponent;
