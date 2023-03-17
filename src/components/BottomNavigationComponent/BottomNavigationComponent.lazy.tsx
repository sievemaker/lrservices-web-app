import React, { lazy, Suspense } from 'react';

const LazyBottomNavigationComponent = lazy(() => import('./BottomNavigationComponent'));

const BottomNavigationComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBottomNavigationComponent {...props} />
  </Suspense>
);

export default BottomNavigationComponent;
