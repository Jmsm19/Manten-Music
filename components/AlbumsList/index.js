import React from 'react';
import PropTypes from 'prop-types';
import { MusicContextConsumer } from '../../context/MusicContext';
import List from '../List';
import AlbumListItem from '../AlbumListItem';

function AlbumList({ albums }) {
  return (
    <MusicContextConsumer>
      {({ selectedAlbum, selectAlbum }) => (
        <List
          data={albums}
          emptyText='No hay albumes disponibles'
          selectAlbum={selectAlbum}
          selectedAlbum={selectedAlbum}
          component={AlbumListItem}
        />
      )}
    </MusicContextConsumer>
  );
}

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default AlbumList;
