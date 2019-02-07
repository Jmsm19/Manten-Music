import React from 'react';
import PropTypes from 'prop-types';

function EmtpyList({ emptyText }) {
  return (
    <div>
      <p>{emptyText}</p>
    </div>
  );
}

EmtpyList.defaultProps = {
  emptyText: 'No hay datos',
};

EmtpyList.propTypes = {
  emptyText: PropTypes.string,
};

export default EmtpyList;
