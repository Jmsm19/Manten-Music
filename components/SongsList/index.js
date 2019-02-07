import React from 'react';
import PropTypes from 'prop-types';
import { MusicContextConsumer } from '../../context/MusicContext';
import List from '../List';
import SongListItem from '../SongListItem';

function SongsList({ songs }) {
  return (
    <MusicContextConsumer>
      {({ selectedSong, selectSong }) => (
        <div className='songs-list'>
          <h2 className='list-title'>Canciones</h2>

          <List
            showNumber
            data={songs}
            emptyText='No hay canciones disponibles para este album'
            selectedSong={selectedSong}
            selectSong={selectSong}
            component={SongListItem}
          />
        </div>
      )}
    </MusicContextConsumer>
  );
}

SongsList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default SongsList;
