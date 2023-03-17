import React, { lazy, Suspense } from 'react';

const LazyMySnackBar = lazy(() => import('./MySnackBar'));

const MySnackBar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMySnackBar {...props} />
  </Suspense>
);

export default MySnackBar;
