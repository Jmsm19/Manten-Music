import styled from 'styled-components';

const StyledArtistItem = styled.div`
  button {
    background: transparent;
    border: none;
    text-align: left;
    margin-bottom: 5px;
    margin-left: 15px;

    &.selected {
      color: var(--red);
    }

    h2 {
      font-size: 2rem;
    }

    .year {
      margin-left: 5px;
      color: var(--gray);
    }

    &:hover {
      cursor: pointer;
      color: var(--red);
    }
  }
`;

export default StyledArtistItem;
