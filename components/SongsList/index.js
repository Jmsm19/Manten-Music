import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { MusicContextConsumer } from '../../context/MusicContext';

function SongsList({ data }) {
  if (data.length === 0) {
    return (
      <div>
        <p>No hay canciones disponibles para este album</p>
      </div>
    );
  }

  return (
    <MusicContextConsumer>
      {({ selectedSong, selectSong }) =>
        data &&
        data.map(({ title }) => (
          <div key={uuid()}>
            <button type='button' onClick={() => selectSong(title)}>
              <h4>{title}</h4>
              {selectedSong === title && <p>Reproduciendo...</p>}
            </button>
          </div>
        ))
      }
    </MusicContextConsumer>
  );
}

SongsList.defaultProps = {
  data: [],
};

SongsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ),
};

export default SongsList;
