import React from "react";
import PageTitle from "../../common/PageTitle";
import CurationsGrid from "./CurationsGrid";
import PartnersGrid from "./PartnersGrid";

const Curations = async () => {


  curations.forEach((curation) => {
    if (curation.type === "release") {
      releases.push(curation);
    } else if (curation.type === "selection") {
      selections.push(curation);
    } else if (curation.type === "partner") {
      partners.push(curation);
    }
  });

  return (
    <div className="w-full flex flex-col gap-24 p-2 md:p-0">
      <PageTitle title="Explore curated collections" />
      <div className="flex flex-col gap-12">
        <CurationsGrid title="Curated Collections" curations={releases} />
        {/* <CurationsGrid title="Thematic Selections" curations={selections} />
        <PartnersGrid title="External Curators" curations={partners} /> */}
      </div>
    </div>
  );
};

export default Curations;
