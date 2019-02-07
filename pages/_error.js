import React from 'react';
import PropTypes from 'prop-types';

class ErrorPage extends React.Component {
  static getInitialProps({ res, err }) {
    // eslint-disable-next-line no-nested-ternary
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;

    return (
      <div>
        <h2>Error {statusCode || ''}</h2>
        <p>
          <span role='img' aria-label='guardsman'>
            💂
          </span>
          ¿A dónde piensas que vas?
        </p>
      </div>
    );
  }
}

ErrorPage.defaultProps = {
  statusCode: 404,
};

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
};

export default ErrorPage;
