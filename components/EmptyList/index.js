import React from 'react';
import PropTypes from 'prop-types';
import StyledEmptyList from '../../styles/components/EmptyList';

function EmtpyList({ emptyText }) {
  return (
    <StyledEmptyList>
      <p>{emptyText}</p>
    </StyledEmptyList>
  );
}

EmtpyList.defaultProps = {
  emptyText: 'No hay datos',
};

EmtpyList.propTypes = {
  emptyText: PropTypes.string,
};

export default EmtpyList;
