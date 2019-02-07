import React from 'react';
import PropTypes from 'prop-types';
import { MusicContextConsumer } from '../../context/MusicContext';
import List from '../List';
import AlbumListItem from '../AlbumListItem';

function AlbumList({ albums }) {
  return (
    <MusicContextConsumer>
      {({ selectedAlbum, selectAlbum }) => (
        <div className='albums-list'>
          <h2 className='list-title'>Álbumes</h2>

          <List
            data={albums}
            emptyText='No hay albumes disponibles'
            selectAlbum={selectAlbum}
            selectedAlbum={selectedAlbum}
            component={AlbumListItem}
          />
        </div>
      )}
    </MusicContextConsumer>
  );
}

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default AlbumList;
