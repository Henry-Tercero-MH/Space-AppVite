import styled from "styled-components";
import CampoTexto from "../CampoTexto";
const HeaderEstilizado = styled.header`
  padding: 60px 0px;
  display: flex;
  justify-content: space-between;
  img {
    width: 212px;
  }
`;

const Cabecera = () => {
  return (
    <HeaderEstilizado>
      <img src="img/logo.png" alt="logo de space-app" />
      <CampoTexto />
    </HeaderEstilizado>
  );
};

export default Cabecera;
