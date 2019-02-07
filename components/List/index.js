import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import EmtpyList from '../EmptyList';

function List({ data, emptyText, component, ...rest }) {
  if (data.length === 0) {
    return <EmtpyList emptyText={emptyText} />;
  }

  const Component = component;
  return (
    <div>
      {data.map(item => (
        <Component key={uuid()} {...item} {...rest} />
      ))}
    </div>
  );
}

List.defaultProps = {
  data: [],
  emptyText: null,
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()),
  emptyText: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  component: PropTypes.any.isRequired,
};

export default List;
