import React from 'react'
import facebookLogo from '../assets/images/icon-facebook.svg'

export const OverviewCard = ({user, audienceType,audience, network}) => {
  return (
    <article className='bg-.Light-GrayishBlue w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto'>
      <img src={facebookLogo} alt='facebook'></img>
      <p>{user}</p>
      <p>{audience}</p>
      <p>{audienceType}</p>
    </article>
  )
}
