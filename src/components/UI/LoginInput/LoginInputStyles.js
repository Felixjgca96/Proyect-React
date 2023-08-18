import styled from "styled-components";

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInputStyled = styled.input`
  width: 250px;
  padding: 1.2rem 2rem;
  color: white;
  background: #090909;
  border-radius: 15px;
  border: ${({ isError }) => (isError ? "1px solid #fb103d " : "none")};
  outline: none;
  caret-color: white;

  &:hover {
    background: black;
    border: 1px solid white;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
