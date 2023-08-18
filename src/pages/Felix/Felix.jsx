import LoginInput from "../../components/UI/LoginInput/LoginInput";
import Submit from "../../components/UI/Submit/Submit";

import { Form, LoginContainerStyled } from "./FelixStyles";

const Felix = () => {
  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Form>
        <LoginInput type="text" placeholder="Nombre" />
        <LoginInput type="text" placeholder="Email" />
        <LoginInput type="password" placeholder="Password" />

        <Submit type="button" onClick={(e) => e.preventDefault()}>
          Registrarte
        </Submit>
      </Form>
    </LoginContainerStyled>
  );
};

export default Felix;
