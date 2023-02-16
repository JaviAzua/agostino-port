import React from "react";
import PageWrapper from "../page-wrapper";

type Props = {};

function page({}: Props) {
  return (
    <>
      <PageWrapper>
        <main className="min-h-[80vh]">page</main>
      </PageWrapper>
    </>
  );
}

export default page;
