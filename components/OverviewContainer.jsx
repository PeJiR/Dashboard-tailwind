import data from "../../data/data.json";
import { OverviewCard, OverViewTodayCard } from "./OverviewCard";

import React from "react";
/**
 * Converts a number to K format if it is greater than or equal to 100,000.
 *
 * @param {number} number - The number to be converted
 * @return {string|number} The converted number in K format if applicable
 */
const converNumberToK = (number) =>
  number >= 1e4 ? `${(number / 1e3).toFixed(0)}k` : number;

/**
 * Renders the OverviewContainer component with network data.
 *
 * @return {JSX.Element} The JSX element representing the OverviewContainer component.
 */
export const OverviewContainer = () => {
  return (
    <section className=" p-4 max-w-screen-2xl flex flex-wrap gap-7 mt-6 absolute place-content-center left-0 right-0  mx-auto  top-52  ">
      {data.overview.map(
        ({ id, user, audienceType, audience, network, isUp, today }) => (
          <OverviewCard
            key={id}
            user={user}
            audienceType={audienceType}
            audience={converNumberToK(audience)}
            network={network}
            isUp={isUp}
            today={today}
          />
        )
      )}
    </section>
  );
};

/**
 * Renders the OverViewTodayContainer component with data mapped to OverViewTodayCard components.
 *
 * @return {JSX.Element} The JSX element representing the OverViewTodayContainer component.
 */
export const OverViewTodayContainer = () => {
  return (
    <section className="max-x-[1440px]">
      <h2 className=" max-w-[1440px] flex flex-wrap relative place-content-center text-2xl font-bold mb-7 text-Dark-Grayish-Blue dark:text-.Very-Pale-Blue ml-10 ">
        Overview Today
      </h2>
      <div className=" p-4  max-w-screen-2xl flex flex-wrap mx-auto  text-.Dark-Grayish-Blue">
        {data[`overviewtoday`].map((object) => (
          <OverViewTodayCard
            key={object.id}
            network={object.network}
            statsType={object.statsType}
            stats={converNumberToK(object.stats)}
            percentage={object.percentage}
            isUp={object.isUp}
          />
        ))}
      </div>
    </section>
  );
};
