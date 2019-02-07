import React from 'react';
import PropTypes from 'prop-types';
import { MusicContextConsumer } from '../../context/MusicContext';
import ArtistListItem from '../ArtistListItem';
import StyledArtistList from '../../styles/components/ArtistList';

function ArtistsList({ artists }) {
  return (
    <MusicContextConsumer>
      {({ selectArtist, selectedArtist }) => (
        <div className='artists-list'>
          <h2 className='list-title'>Artistas</h2>
          <div className='list-area'>
            <StyledArtistList
              data={artists}
              emptyText='No hay artistas disponibles'
              selectArtist={selectArtist}
              selectedArtist={selectedArtist}
              component={ArtistListItem}
            />
          </div>
        </div>
      )}
    </MusicContextConsumer>
  );
}

ArtistsList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ArtistsList;
