import React, { lazy, Suspense } from 'react';

const LazyCareerProfileBox = lazy(() => import('./CareerProfileBox'));

const CareerProfileBox = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCareerProfileBox {...props} />
  </Suspense>
);

export default CareerProfileBox;
