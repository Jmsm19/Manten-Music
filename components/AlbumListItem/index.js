import React from 'react';
import PropTypes from 'prop-types';
import SongsList from '../SongsList';

function AlbumListItem({ name, year, songs, selectAlbum, selectedAlbum }) {
  return (
    <>
      <button type='button' onClick={() => selectAlbum(name)}>
        <h3>
          {name} - {year}
        </h3>
      </button>
      {selectedAlbum === name && <SongsList songs={songs} />}
    </>
  );
}

AlbumListItem.defaultProps = {
  albums: [],
};

AlbumListItem.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  songs: PropTypes.arrayOf(PropTypes.shape()),
  selectAlbum: PropTypes.func.isRequired,
  selectedAlbum: PropTypes.string.isRequired,
};

export default AlbumListItem;
