import data from "../../data/data.json";
import { OverviewCard } from "./OverviewCard";

import React from "react";

export const OverviewContainer = () => {
  const converNumberToK = (number) =>
    number >= 100000 ? `${(number / 1000).toFixed(1)}K` : number;
  return (
    <section className="w-80 mx-auto absolute right-0 left-0 top-52">
      {data.overview.map((object) => (
        <OverviewCard
          key={object.id}
          user={object.user}
          audienceType={object.audienceType}
          audience={converNumberToK(object.audience)}
          network={object.network}
          isUp={object.isUp}
          today={object.today}
        />
      ))}
    </section>
  );
};
