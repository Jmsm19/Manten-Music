import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import StyledAlbumItem from '../../styles/components/AlbumItem';

function AlbumListItem({ name, year, selectAlbum, selectedAlbum }) {
  const classNames = classnames({
    selected: selectedAlbum === name,
  });

  return (
    <StyledAlbumItem>
      <button type='button' onClick={() => selectAlbum(name)} className={classNames}>
        <h3>
          {name} <span className='year'>({year})</span>
        </h3>
      </button>
    </StyledAlbumItem>
  );
}

AlbumListItem.defaultProps = {
  selectedAlbum: '',
};

AlbumListItem.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  selectAlbum: PropTypes.func.isRequired,
  selectedAlbum: PropTypes.string,
};

export default AlbumListItem;
