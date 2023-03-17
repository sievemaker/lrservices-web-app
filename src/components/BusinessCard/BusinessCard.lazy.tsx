import React, { lazy, Suspense } from 'react';

const LazyBusinessCard = lazy(() => import('./BusinessCard'));

const BusinessCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBusinessCard {...props} />
  </Suspense>
);

export default BusinessCard;
