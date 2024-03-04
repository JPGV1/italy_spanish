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
    <a  href="https://www.linkedin.com/in/juan-pablo-garc%C3%ADa-926b742b7/" target='blank'><FaLinkedin/></a>
    <a  href="https://www.facebook.com/profile.php?id=100009147904319" target='blank'><FaFacebookF/></a>
    <a  href="https://www.instagram.com/juan_pa_villa12/" target='blank'><FaInstagram/></a>
    <a  href="https://twitter.com/zzzVilla_Jp" target='blank'><FaTwitter/></a>
    <a  href="https://wa.me/573205834473?text=Buenas"target='blank'><FaWhatsapp/></a>

    </div>

    </>
  )
}
