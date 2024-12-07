import React from "react";
import Interview from "~/app/_components/pages/Interview/Interview";

export const metadata = {
  title: "Medici Interview",
  description: "Discover interviews with artists and curators on Medici.",
};

const InterviewPage = ({ params }: { params: { slug: string } }) => {
  return <Interview slug={params.slug} />;
};

export default InterviewPage;
