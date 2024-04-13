import React from "react";
import iconDown from "../assets/images/icon-down.svg";
import facebookLogo from "../assets/images/icon-facebook.svg";
import instagramLogo from "../assets/images/icon-instagram.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import iconUp from "../assets/images/icon-up.svg";
import youtubeLogo from "../assets/images/icon-youtube.svg";
const networkLogos = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  Youtube: youtubeLogo,
};

const networkcolors = {
  Facebook: "bg-.Facebook",
  Twitter: "bg-.Twitter",
  Instagram: "bg-.Instagram-gradient",
  Youtube: "bg-.YouTube",
};

export const OverviewCard = ({
  user,
  audienceType,
  audience,
  network,
  isUp,
  today,
}) => {
  return (
    <article className="bg-.Light-GrayishBlue dark:bg-.Dark-Desaturated-Blue  w-80 h-52 mb-6 rounded-md mt-4 mx-auto text-center overflow-hidden hover:brightness-95 cursor-pointer hover:dark:brightness-125">
      <div className={`${networkcolors[network]} h-1`}></div>
      <div className="flex place-content-center items-center p-6 gap-2">
        <img src={networkLogos[network]} alt={`logo ${network}`}></img>
        <p className="text-xs text-.Dark-Grayish-Blue font-bold ">{user}</p>
      </div>
      <p className="text-5xl font-bold text-.Very-Dark-Blue dark:text-.Very-Pale-Blue">
        {audience}
      </p>
      <p className="uppercase tracking-wider text-.Dark-Grayish-Blue text-xs mt-2 ">
        {audienceType}
      </p>
      <div className="flex place-content-center items-center p-6 gap-1">
        <img src={isUp ? iconUp : iconDown} alt="icon arrow" />

        <p
          className={`text-xs font-bold  ${
            isUp ? "text-.Lime-Green" : "text-.Bright-Red"
          }`}
        >
          {today} today
        </p>
      </div>
    </article>
  );
};

export const OverViewTodayCard = ({
  network,
  statsType,
  stats,
  percentage,
  isUp,
}) => (
  <article className="bg-.Light-GrayishBlue w-xs dark:bg-.Dark-Desaturated-Blue h-24 mb-2 rounded-md   mt-9 overflow-hidden hover:brightness-95 hover:dark:brightness-125 p-5 cursor-pointer ">
    <div className="flex justify-between pb-2">
      <p className="text-sm text-.Dark-Grayish-Blue font-bold">{statsType}</p>
      <img src={networkLogos[network]} alt={`logo ${network}`}></img>
    </div>
    <div className="flex justify-between ">
      <p className="   text-3xl font-bold text-.Very-Dark-Blue dark:text-.Very-Pale-Blue">
        {stats}
      </p>
      <div className="flex place-content-center items-center gap-1 mt-2">
        <img src={isUp ? iconUp : iconDown} alt="icon arrow" />
        <p
          className={`text-xs font-bold ${
            isUp ? "text-.Lime-Green" : "text-.Bright-Red"
          }`}
        >
          {percentage}%
        </p>
      </div>
    </div>
  </article>
);
