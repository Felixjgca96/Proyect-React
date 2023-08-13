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
          <img src="./logo.png" alt="logo" />
        </a>
      </LogoContainerStyled>
      <LinksContainerStyled>
        <a href="#hero">Inicio</a>
        <a href="#beneficios">Beneficios</a>
        <a href="#productos">Productos</a>
        <a href="#contacto">Contacto</a>
      </LinksContainerStyled>
      <IconoContainerStyled>
        <img className="menuamburgueza" src="./menu.png" alt="menu" />
        <img className="usuario" src="./usuario.png" alt="icono" />
        <img className="carrito" src="./carritodecompras.png" alt="icono" />
      </IconoContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
