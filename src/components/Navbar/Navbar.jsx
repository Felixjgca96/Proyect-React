import React from "react";
import {
  LinksContainerStyled,
  NavbarContainerStyled,
  LogoContainerStyled,
  IconoContainerStyled,
  MenuContainerStyled,
} from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarContainerStyled>
      <LogoContainerStyled>
        <a href="/#">
          <img src="./src/assets/img/logo.png" alt="logo" />
        </a>
      </LogoContainerStyled>
      <LinksContainerStyled>
        <a href="#hero">Inicio</a>
        <a href="#beneficios">Beneficios</a>
        <a href="#productos">Productos</a>
        <a href="#contacto">Contacto</a>
      </LinksContainerStyled>
      <MenuContainerStyled>
        <img src="./src/assets/img/menu.png" alt="menu" />
      </MenuContainerStyled>
      <IconoContainerStyled>
        <img src="./src/assets/img/usuario.png" alt="icono" />
        <img src="./src/assets/img/carritodecompras.png" alt="icono" />
      </IconoContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
