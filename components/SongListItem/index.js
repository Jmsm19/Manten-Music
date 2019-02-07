import React from 'react';
import PropTypes from 'prop-types';
import StyledSongItem from '../../styles/components/SongItem';

function SongListItem({ title, selectSong, selectedSong }) {
  return (
    title && (
      <StyledSongItem>
        <button type='button' onClick={() => selectSong(title)}>
          <h4>
            {selectedSong && selectedSong.title === title && <i className='fas fa-play' />}
            {title}
          </h4>
        </button>
      </StyledSongItem>
    )
  );
}

SongListItem.defaultProps = {
  selectedSong: null,
  title: null,
};

SongListItem.propTypes = {
  title: PropTypes.string,
  selectSong: PropTypes.func.isRequired,
  selectedSong: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default SongListItem;
