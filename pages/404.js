import React from "react";
import Error404 from "../components/Error404";
import PageLayout from "../components/layouts/PageLayout";

const NotFound = () => {
  return (
    <PageLayout title="Not Found" header={false}>
      <Error404 />
    </PageLayout>
  );
};

export default NotFound;
