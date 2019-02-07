import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import SongsList from '../SongsList';
import { MusicContextConsumer } from '../../context/MusicContext';

function AlbumList({ data }) {
  if (data.length === 0) {
    return (
      <div>
        <p>No hay albumes disponibles</p>
      </div>
    );
  }

  return (
    <MusicContextConsumer>
      {({ selectedAlbum, selectAlbum }) =>
        data &&
        data.map(({ name, year, songs }) => (
          <div key={uuid()}>
            <button type='button' onClick={() => selectAlbum(name)}>
              <h3>
                {name} - {year}
              </h3>
            </button>
            {selectedAlbum === name && <SongsList data={songs} />}
          </div>
        ))
      }
    </MusicContextConsumer>
  );
}

AlbumList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      artist: PropTypes.string,
      albums: PropTypes.shape(),
    }),
  ).isRequired,
};

export default AlbumList;
