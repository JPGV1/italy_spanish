import React from 'react'
import  pictureProfile  from "../../assets/logosena.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import './logoAndMedias.css'
export const LogoAndMedias = () => {
  return (
    <>
    <img id='PictureNav' src={pictureProfile} alt='LogoSenaNav'/>
    <div id='Medias'>
    <a  href=""><FaLinkedin/></a>
    <a  href=""><FaFacebookF/></a>
    <a  href=""><FaInstagram/></a>
    <a  href=""><FaTwitter/></a>
    <a  href=""><FaWhatsapp/></a>

    </div>

    </>
  )
}
