import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
`;

export const ItemLink = styled.a`
  padding: 0.5rem 1.5rem;
  background: black;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid #ffffff;
  &:hover {
    background: #b7b7a4;
    color: black;
  }
  @media (max-width: 980px) {
    font-size: 15px;
  }
`;
