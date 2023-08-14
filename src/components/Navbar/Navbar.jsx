// import React from "react";
// import {
//   LinksContainerStyled,
//   NavbarContainerStyled,
//   LogoContainerStyled,
//   IconoContainerStyled,
//   MenuContainerStyled,
// } from "./NavbarStyles";

// const Navbar = () => {
//   return (
//     <NavbarContainerStyled>
//       <LogoContainerStyled>
//         <a href="/#">
//           <img src="./logo.png" alt="logo" />
//         </a>
//       </LogoContainerStyled>
//       <LinksContainerStyled>
//         <a href="#hero">Inicio</a>
//         <a href="#beneficios">Beneficios</a>
//         <a href="#productos">Productos</a>
//         <a href="#contacto">Contacto</a>
//       </LinksContainerStyled>

//       <IconoContainerStyled>
//         <img src="./usuario.png" alt="icono" />
//         <img src="./carritodecompras.png" alt="icono" />
//       </IconoContainerStyled>
//     </NavbarContainerStyled>
//   );
// };

// export default Navbar;

import React from "react";
import { useContext } from "react";
import {
  HeaderContainerStyled,
  NavbarContainerStyled,
  MenuStyled,
  NavListPrincipal,
  ButtonMenu,
  LogoContainerStyled,
  IconoContainerStyled,
} from "./NavbarStyles";
import { NavItem } from "./components/nav-item";
import { Context } from "./MenuContext";

const Navbar = () => {
  const navLinks = ["Home", "Sobre Nosotros", "Productos", "Contacto"];

  const { state, dispatch } = useContext(Context);

  return (
    <HeaderContainerStyled>
      <NavbarContainerStyled>
        <LogoContainerStyled>
          <a href="/#">
            <img src="./logo.png" alt="logo" />
          </a>
        </LogoContainerStyled>
        <MenuStyled>
          <ButtonMenu onClick={() => dispatch({ type: "toggle_menu" })}>
            <img src="./menu.png" alt="menu" />
          </ButtonMenu>
          <NavListPrincipal className={state.isMenuOpen ? "open" : ""}>
            {navLinks.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </NavListPrincipal>
        </MenuStyled>
        <IconoContainerStyled>
          <img src="./usuario.png" alt="icono" />
          <img src="./carritodecompras.png" alt="icono" />
        </IconoContainerStyled>
      </NavbarContainerStyled>
    </HeaderContainerStyled>
  );
};

export default Navbar;
