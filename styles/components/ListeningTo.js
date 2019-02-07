import styled from 'styled-components';

const StyledListeningTo = styled.div`
  margin-top: 30px;

  .song,
  .artist,
  .album {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--gray);

    .name {
      margin-left: 10px;
      letter-spacing: 1px;
      font-weight: normal;
      color: var(--white);
    }
  }
`;

export default StyledListeningTo;
