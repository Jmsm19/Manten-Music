import styled from 'styled-components';

const StyledPage = styled.div`
  header {
    font-size: 2rem;
    padding-bottom: 20px;
    letter-spacing: 1px;

    h1 {
      .username {
        font-size: 3rem;
        color: var(--red);
        margin-left: 3px;
      }
    }
  }
`;

export default StyledPage;
