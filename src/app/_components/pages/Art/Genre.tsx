import React from "react";
import PageTitle from "../../common/PageTitle";
import ArtFilter from "./client/ArtFilter";
import ArtworksSection from "./sections/ArtworksSection";
import { GetNftsPageQuery } from "~/gql/graphql";
import PageManager from "./components/PageManager";

type Props = {
  genre: string;
  nftsPage: NonNullable<GetNftsPageQuery>["nftsPage"];
  searchParams?: { [key: string]: string | string[] | undefined };
};

const Genre = (props: Props) => {
  const { nftsPage, searchParams, genre } = props;
  return (
    <div className="w-full flex flex-col gap-24 relative">
      <PageTitle title={genre} goBackHref="/art" />
      <div className="flex flex-col gap-12">
        <ArtFilter />
        <ArtworksSection nfts={nftsPage.nfts} />
      </div>
      <PageManager
        totalPages={nftsPage.totalPages}
        currentPage={nftsPage.currentPage}
        searchParams={searchParams}
      />
    </div>
  );
};

export default Genre;
