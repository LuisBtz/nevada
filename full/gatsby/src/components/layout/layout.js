import React from "react";
import styled from "styled-components";
import { Normalizer } from "../styles/Normalizer"
import { Typography } from "../styles/Typography"
import Header from "./header"
import Footer from "./footer"
import whatsappIcon from "../../assets/images/whatsapp.png"




function Layout({ children, indexTrue }) {

  return (
    <>
      <Normalizer />
      <Typography />
      <Header indexTrue={indexTrue} />
      <main >{children}</main>
      <Footer />
      <WhatsAppLink href="https://wa.me/+528110773013" target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon src={whatsappIcon} alt="WhatsApp" />
      </WhatsAppLink>
    </>
  )
}


const WhatsAppLink = styled.a`
  position: fixed;
  bottom: 20px;
  right: 25px;
  z-index: 9;
  display: block;
`;

const WhatsAppIcon = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export default Layout
