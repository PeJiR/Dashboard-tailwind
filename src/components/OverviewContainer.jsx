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
<<<<<<< HEAD
    <section className="max-w-screen-2xl flex flex-wrap gap-7 absolute place-content-center left-0 right-0  mx-auto   top-48 ">
=======
    <section className="max-w-screen-2xl flex flex-wrap absolute left-0 right-0  mx-auto  top-48">
>>>>>>> aadb2f81dfb7c69e580e2f163b56c40f88fdb155
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

<<<<<<< HEAD
=======
console.log(data[`overviewtoday`]);

>>>>>>> aadb2f81dfb7c69e580e2f163b56c40f88fdb155
/**
 * Renders the OverViewTodayContainer component with data mapped to OverViewTodayCard components.
 *
 * @return {JSX.Element} The JSX element representing the OverViewTodayContainer component.
 */
export const OverViewTodayContainer = () => {
  return (
    <section>
<<<<<<< HEAD
      <h2 className="text-.Very-Dark-Blue dark:text-.Very-Pale-Blue font-bold text-2xl pt-6 mb-"> Overview Today</h2>
=======
      <h2 className="text-.Very-Dark-Blue dark:text-.Very-Pale-Blue font-bold text-2xl pt-6 mb-2   "> Overview Today</h2>
>>>>>>> aadb2f81dfb7c69e580e2f163b56c40f88fdb155
      <div className=" w-80 mx-auto absolute right-0 left-0">
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
