import React from 'react'
import {FaInstagram, FaTwitter, FaFacebook, FaLinkedin,FaTelegram} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Priyansh</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href ='#education'>Education</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.instagram.com/__furious__priyansh__/'><FaInstagram/></a>
        <a href='https://twitter.com/Priyansh1227114'><FaTwitter/></a>
        <a href='https://www.facebook.com/profile.php?id=100010585428131'><FaFacebook/></a>
        <a href='https://www.linkedin.com/in/priyansh-saxena-254192190/'><FaLinkedin/></a>
        <a href='https://t.me/Priyansh_shredder'><FaTelegram/></a>
      </div>

      <div className='footer__copyright'>
        Made by Priyansh Saxena
      </div>
    </footer>
  )
}

export default Footer