import data from "../../data/data.json";
import { OverviewCard } from "./OverviewCard";

import React from "react";

export const OverviewContainer = () => {
  return (
    <section>
      {data.overview.map((object) => (
        <OverviewCard 
          key={object.id} 
          user={object.user}
          audienceType={object.audienceType}
          audience={object.audience}
          network={object.network}
          isUp={object.isUp}
          today={object.today}
          />
      ))}
    </section>
  );
};
