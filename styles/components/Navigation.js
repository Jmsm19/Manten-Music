import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  padding: 5px 30px;
  justify-content: space-between;
  letter-spacing: 1px;

  a {
    margin-left: 20px;
    color: var(--white);
    font-size: 2rem;
    padding: 10px;
    transition: border-bottom 0.3s ease-in-out;
    border-bottom: 1px solid transparent;

    &.active,
    &:hover {
      color: var(--red);
      border-bottom: 1px solid var(--red);
    }
  }

  @media screen and (min-width: var(--tablet-size)) {
    padding: 20px 30px;
  }
`;

export default StyledNav;
