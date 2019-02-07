import styled from 'styled-components';

export const StyledButton = styled.button`
  position: relative;
  font-size: 2rem;
  text-transform: uppercase;
  margin: 0 auto;
  width: 90%;
  max-width: 300px;
  background: transparent;
  border: 1px solid var(--wine);
  padding: 5px;
  border-radius: 30px;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    background: var(--wine);
    width: 100%;
    height: 0%;
    top: 0;
    left: 0;
    transition: height 0.2s ease-in-out;
    z-index: -1;
  }

  &:hover,
  &:active {
    cursor: pointer;
    font-weight: bold;

    &::before {
      height: 100%;
    }
  }
`;

export const StyledMain = styled.main`
  padding: 15px 20px 20px;
`;
