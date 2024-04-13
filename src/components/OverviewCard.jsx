import React from "react";
import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import instagramLogo from "../assets/images/icon-instagram.svg";
import youtubeLogo from "../assets/images/icon-youtube.svg";
import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";
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

export function OverviewCard({
  user,
  audienceType,
  audience,
  network,
  isUp,
  today,
}) {
  return (
    <article className="bg-.Light-GrayishBlue dark:bg-.Dark-Desaturated-Blue w-full h-52 mb-6 rounded-md mt-4 mx-auto text-center overflow-hidden hover:brightness-95 cursor-pointer hover:dark:brightness-125">
      <div className={`${networkcolors[network]} h-1`}></div>
      <div className="flex place-content-center items-center p-6 gap-2">
        <img src={networkLogos[network]} alt={`logo ${network}`}></img>
        <p className="text-xs text-.Dark-Grayish-Blue font-bold ">{user}</p>
      </div>
      <p className="text-5xl font-bold text-.Very-Dark-Blue dark:text-.Very-Pale-Blue" >{audience}</p>
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
}
