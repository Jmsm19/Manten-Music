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

  .logo {
    h1 {
      font-size: 4rem;
      text-align: center;
    }
  }

  .alert-danger {
    font-size: 1.8rem;
    background: transparent;
    color: var(--red);
    border: none;

    i {
      margin-right: 10px;
    }
  }

  .form-label {
    color: var(--gray);
    font-size: 2.3rem;

    &.hasError {
      color: var(--red);
    }
  }

  .form-control {
    font-size: 2rem;
    padding: 10px;
    height: 40px;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--wine);
    color: var(--white);
  }

  .invalid-feedback {
    font-size: 1.5rem;
    padding: 5px;
    color: var(--red);
  }

  button {
    margin-top: 20px;
  }
`;

export default StyledForm;
