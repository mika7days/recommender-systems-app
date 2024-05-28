import React from "react";
import { Highlight } from "react-instantsearch-dom";
import { HashLink } from "react-router-hash-link";


export const Hit = ({ hit }) => {

  return (
    <article className="w-[300px] sm:w-[700px] rounded-xl text-lg lg:text-xl">
      <HashLink smooth to={hit.url} rel="noopener noreferrer">
        <div className="hit-title font-semibold">
          <Highlight attribute="title" hit={hit} />
        </div>
        <div className="hit-url text-sm text-gray-500">
          <Highlight attribute="url" hit={hit} />
        </div>
      </HashLink>
    </article>
  );
};