import React, { lazy, Suspense } from 'react';

const LazyImpressum = lazy(() => import('./Impressum'));

const Impressum = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyImpressum {...props} />
  </Suspense>
);

export default Impressum;
