import React from "react";
import {
  ContactoContainerStyled,
  MapsYContactoStyled,
  MapsStyled,
  ContactoStyled,
  TlfYGmailStyled,
  IconosStyled,
  GmailStyled,
  TlfStyled,
} from "./ContactoStyles";

const Contacto = () => {
  return (
    <ContactoContainerStyled id="contacto">
      <h2>Ubícanos</h2>
      <MapsYContactoStyled>
        <MapsStyled>
          <h2>Puerto La Cruz.</h2>
          <h2>Estado Anzoategui.</h2>
        </MapsStyled>
        <ContactoStyled>
          <TlfYGmailStyled>
            <GmailStyled>
              <img src="./gmail.png" alt="" />
              <p>Felixjgca@gmail.com</p>
            </GmailStyled>
            <TlfStyled>
              <img src="./tlf.png" alt="" />
              <p>+54 9 11-27700307</p>
            </TlfStyled>
          </TlfYGmailStyled>
          <IconosStyled>
            <a href="https://m.facebook.com/Felixc6" target="_blank">
              <img src="./face.png" alt="" />
            </a>
            <a href="https://www.instagram.com/felixjgca/" target="_blank">
              <img src="./ig.png" alt="" />
            </a>
            <a href="https://wa.me/5491127700307" target="_blank">
              <img src="./wa.png" alt="" />
            </a>
          </IconosStyled>
        </ContactoStyled>
      </MapsYContactoStyled>
    </ContactoContainerStyled>
  );
};

export default Contacto;
