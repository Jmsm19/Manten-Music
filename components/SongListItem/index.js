import React from 'react';
import PropTypes from 'prop-types';

function SongListItem({ title, selectSong, selectedSong }) {
  return (
    <>
      <button type='button' onClick={() => selectSong(title)}>
        <h4>{title}</h4>
        {selectedSong === title && <p>Reproduciendo...</p>}
      </button>
    </>
  );
}

SongListItem.propTypes = {
  title: PropTypes.string.isRequired,
  selectSong: PropTypes.func.isRequired,
  selectedSong: PropTypes.string.isRequired,
};

export default SongListItem;
