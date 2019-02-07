import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import AlbumList from '../AlbumsList';
import { MusicContextConsumer } from '../../context/MusicContext';

function ArtistsList({ data }) {
  return (
    <MusicContextConsumer>
      {({ selectArtist, selectedArtist }) =>
        data &&
        data.map(({ artist, albums }) => (
          <div key={uuid()}>
            <button type='button' onClick={() => selectArtist(artist)}>
              <h2>{artist}</h2>
            </button>
            {selectedArtist === artist && <AlbumList data={albums} />}
          </div>
        ))
      }
    </MusicContextConsumer>
  );
}

ArtistsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      artist: PropTypes.string,
      albums: PropTypes.arrayOf(PropTypes.shape()),
    }),
  ).isRequired,
};

export default ArtistsList;
