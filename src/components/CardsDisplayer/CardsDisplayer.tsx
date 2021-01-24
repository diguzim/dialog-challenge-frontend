import styled from "styled-components";

const CardsDisplayer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2rem;
`;

export default CardsDisplayer;
