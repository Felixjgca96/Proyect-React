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
      <h2>Contacto</h2>
      <MapsYContactoStyled>
        <MapsStyled>
          <iframe
            class="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26415.56259096972!2d-64.63988583433228!3d10.205253141433754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d74183d40f315%3A0xdfe80aa148f7489!2sC.C%20Regina!5e0!3m2!1ses!2sve!4v1671220692299!5m2!1ses!2sve"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <h2>Puerto La Cruz.</h2>
          <h2>Estado Anzoategui.</h2>
        </MapsStyled>
        <ContactoStyled>
          <TlfYGmailStyled>
            <GmailStyled>
              <img src="./src/assets/img/gmail.png" alt="" />
              <p>Felixjgca@gmail.com</p>
            </GmailStyled>
            <TlfStyled>
              <img src="./src/assets/img/tlf.png" alt="" />
              <p>+54 9 11-27700307</p>
            </TlfStyled>
          </TlfYGmailStyled>
          <IconosStyled>
            <a href="https://m.facebook.com/Felixc6" target="_blank">
              <img src="./src/assets/img/face.png" alt="" />
            </a>
            <a href="https://www.instagram.com/felixjgca/" target="_blank">
              <img src="./src/assets/img/ig.png" alt="" />
            </a>
            <a href="https://wa.me/5491127700307" target="_blank">
              <img src="./src/assets/img/wa.png" alt="" />
            </a>
          </IconosStyled>
        </ContactoStyled>
      </MapsYContactoStyled>
    </ContactoContainerStyled>
  );
};

export default Contacto;
