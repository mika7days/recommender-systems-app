import React from "react";
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import {
  Hits,
  InstantSearch,
  SearchBox,
  Configure,
} from "react-instantsearch-dom";
import { Hit } from "./Hit";

const searchClient = algoliasearch(
  "6C5GE217A0",
  "5b4b53cb001a17a9b7dbbf9da9ef73cb"
);

export const Search = () => {


  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="test"
      
    >
      <Configure hitsPerPage={5} />
      <div className="ais-InstantSearch flex flex-col items-center">
        <div className="ais-SearchBox-form w-full md:w-[700px]">
          <SearchBox className="w-[300px] sm:w-[700px] p-2 text-lg" />
        </div>
        
          <div className="ais-Hits-list w-[300px] sm:w-[700px] mt-4">
            <Hits hitComponent={Hit} />
          </div>
        
      </div>
    </InstantSearch>
  );
};
