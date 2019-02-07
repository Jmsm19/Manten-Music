import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import StyledArtistItem from '../../styles/components/ArtistItem';

function ArtistListItem({ artist, selectArtist, selectedArtist }) {
  const classNames = classnames({
    selected: selectedArtist === artist,
  });

  return (
    <StyledArtistItem>
      <button type='button' onClick={() => selectArtist(artist)} className={classNames}>
        <h2>{artist}</h2>
      </button>
    </StyledArtistItem>
  );
}

ArtistListItem.propTypes = {
  artist: PropTypes.string.isRequired,
  selectArtist: PropTypes.func.isRequired,
  selectedArtist: PropTypes.string.isRequired,
};

export default ArtistListItem;
