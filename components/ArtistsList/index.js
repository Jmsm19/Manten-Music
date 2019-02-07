import React from 'react';
import PropTypes from 'prop-types';
import { MusicContextConsumer } from '../../context/MusicContext';
import List from '../List';
import ArtistListItem from '../ArtistListItem';

function ArtistsList({ artists }) {
  return (
    <MusicContextConsumer>
      {({ selectArtist, selectedArtist }) => (
        <List
          data={artists}
          emptyText='No hay artistas disponibles'
          selectArtist={selectArtist}
          selectedArtist={selectedArtist}
          component={ArtistListItem}
        />
      )}
    </MusicContextConsumer>
  );
}

ArtistsList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ArtistsList;
