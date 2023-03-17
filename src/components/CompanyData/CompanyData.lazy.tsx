import React, { lazy, Suspense } from 'react';

const LazyCompanyData = lazy(() => import('./CompanyData'));

const CompanyData = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCompanyData {...props} />
  </Suspense>
);

export default CompanyData;
