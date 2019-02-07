/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Alert, Form } from 'react-bootstrap';
import StyledForm from '../../styles/components/LoginForm';
import { StyledButton } from '../../styles/components/Common';
import Logo from '../Logo';

const LoginForm = ({ handleLogin, serverMessage }) => {
  const initialState = {
    username: '',
  };

  const ValidationSchema = Yup.object().shape({
    username: Yup.string().required('Este campo no puede estar en blanco'),
  });

  return (
    <Formik initialValues={initialState} validationSchema={ValidationSchema} onSubmit={handleLogin}>
      {({ submitForm, isSubmitting, errors, touched }) => (
        <StyledForm>
          <Logo />

          {serverMessage && (
            <Alert variant='danger'>
              <i className='fas fa-exclamation' /> {serverMessage}
            </Alert>
          )}

          <div>
            <Form.Label className={touched.username && errors.username && 'hasError'}>
              Nombre
            </Form.Label>
            <Field
              name='username'
              render={({ field }) => (
                <>
                  <Form.Control
                    {...field}
                    id='username'
                    type='text'
                    onKeyPress={({ key }) => key === 'Enter' && submitForm()}
                    autoComplete='name'
                    isInvalid={touched.username && errors.username}
                    required
                  />
                  <Form.Control.Feedback type='invalid'>{errors.username}</Form.Control.Feedback>
                </>
              )}
            />
          </div>

          <StyledButton type='submit' disabled={isSubmitting} onClick={submitForm}>
            {isSubmitting ? <i className='fas fa-spinner' /> : 'Entrar'}
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};

LoginForm.defaultProps = {
  handleLogin: () => null,
  serverMessage: '',
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func,
  serverMessage: PropTypes.string,
};

export default LoginForm;
