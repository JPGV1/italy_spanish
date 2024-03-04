import React from 'react'
import './section.css'
import pictureProfile from "../../assets/logosena.png";

export const Section = ({ contentTitle, children }) => {
  return (
    <div id='ContentContainer'>
      <div id='Content'>
        <div id='TwoElements'>
          <img id='PictureNavis' src={pictureProfile} alt='LogoSenaNav' />
          <h2 id='Title'>{contentTitle}</h2>
        </div>
        <hr id='hrMain'/>
        {children}
      </div>
    </div>
  )
}

