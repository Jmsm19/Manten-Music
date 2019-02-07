import React from 'react';
import PropTypes from 'prop-types';
import { MusicContextConsumer } from '../../context/MusicContext';
import List from '../List';
import SongListItem from '../SongListItem';

function SongsList({ songs }) {
  return (
    <MusicContextConsumer>
      {({ selectedSong, selectSong }) => (
        <List
          data={songs}
          emptyText='No hay canciones disponibles para este album'
          selectedSong={selectedSong}
          selectSong={selectSong}
          component={SongListItem}
        />
      )}
    </MusicContextConsumer>
  );
}

SongsList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default SongsList;
