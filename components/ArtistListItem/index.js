import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../AlbumsList';

function ArtistListItem({ artist, albums, selectArtist, selectedArtist }) {
  return (
    <>
      <button type='button' onClick={() => selectArtist(artist)}>
        <h2>{artist}</h2>
      </button>
      {selectedArtist === artist && <AlbumList albums={albums} />}
    </>
  );
}

ArtistListItem.defaultProps = {
  albums: [],
};

ArtistListItem.propTypes = {
  artist: PropTypes.string.isRequired,
  albums: PropTypes.arrayOf(PropTypes.shape()),
  selectArtist: PropTypes.func.isRequired,
  selectedArtist: PropTypes.string.isRequired,
};

export default ArtistListItem;
