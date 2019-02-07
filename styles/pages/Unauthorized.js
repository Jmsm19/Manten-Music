import styled from 'styled-components';

const StyledPage = styled.div`
  main {
    padding: 0 40px;

    h2 {
      font-size: 2.6rem !important;
      margin-bottom: 15px;

      em {
        color: var(--red);
        font-style: normal;
      }
    }

    p {
      margin-bottom: 30px;
    }

    p,
    a {
      font-size: 2rem;
    }

    a:hover,
    a:active {
      .text {
        transition: border-bottom 0.2s ease-in-out;
        border-bottom: 1px solid var(--red);
        padding-bottom: 5px;
      }
    }

    i {
      color: var(--wine);
      margin-right: 15px;
    }
  }
`;

export default StyledPage;
