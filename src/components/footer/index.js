import React from 'react'
import './footer.css'
import FooterIcons from "./FooterIcons";
import FooterMenu from "./FooterMenu";



export const Footer = () => {
  return (
    <footer className='footerClass'>  
      <FooterMenu/>
      <FooterIcons/>
    </footer>
  )
}
