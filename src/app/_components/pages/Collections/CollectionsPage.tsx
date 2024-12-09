import React from "react";
import Section from "./components/Section";
import sectionsData from "./components/SectionData";

const CollectionsPage = () => {
  return (
    <div className="snap-container">
      {sectionsData.map((section, index) => (
        <Section key={index} section={section} isReversed={index % 2 !== 0} />
      ))}
    </div>
  );
};

export default CollectionsPage;
