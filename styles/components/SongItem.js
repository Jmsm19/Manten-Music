import styled from 'styled-components';

const StyledSongItem = styled.div`
  button {
    background: transparent;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    text-align: left;
    margin-bottom: 5px;
    margin-left: 15px;

    h4 {
      display: flex;
      align-items: center;

      font-size: 2rem;
      i {
        font-size: 1.2rem;
        margin-right: 10px;
        color: #27ae60;
      }
    }

    .playing {
      font-size: 1.5rem;

      &:not(i) {
        font-style: italic;
      }
    }

    &:hover {
      cursor: pointer;
      color: var(--red);
    }
  }
`;

export default StyledSongItem;
