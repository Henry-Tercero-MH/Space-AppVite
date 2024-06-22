import styled from "styled-components";

const ListaEstilizada = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <li>
            <a href="inicio">Inicio</a>
          </li>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
