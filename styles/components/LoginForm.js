import styled from 'styled-components';

const StyledForm = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-gap: 20px;
  min-width: 300px;
  max-width: 900px;
  width: 90vw;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  min-height: 300px;

  button {
    margin: 0 auto;
    width: 90%;
    background: transparent;
    border: 1px solid;
    padding: 5px;
  }

  @media screen and (min-width: 728px) {
  }
`;

export default StyledForm;
