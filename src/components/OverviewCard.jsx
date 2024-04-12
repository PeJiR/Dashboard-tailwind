import React from "react";
import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import instagramLogo from "../assets/images/icon-instagram.svg";
import youtubeLogo from "../assets/images/icon-youtube.svg";

const networkLogos = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  Youtube: youtubeLogo,
};

const networkcolors = {
  Facebook:'bg-.Facebook',
  Twitter:"bg-.Twitter"  ,
  Instagram: ".Instagram-gradient" ,
  Youtube: ".YouTube" ,
};

export const OverviewCard = ({ user, audienceType, audience, network }) => {
  return (
    <article src={networkcolors[network]}  className="bg-.Light-GrayishBlue w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden">
      <div className={`${networkcolors[network]} h-1`} ></div>      
      <div className="flex place-content-center items-center p-6 gap-2 mb-7">
        <img src={networkLogos[network]} alt={`logo ${network}`}></img>
        <p>{user}</p>
      </div>
      <p>{audience}</p>
      <p>{audienceType}</p>
    </article>
  );
};
