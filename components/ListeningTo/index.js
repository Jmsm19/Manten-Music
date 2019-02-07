import React from 'react';
import { MusicContextConsumer } from '../../context/MusicContext';
import StyledListeningTo from '../../styles/components/ListeningTo';

function ListeningTo() {
  return (
    <MusicContextConsumer>
      {({ selectedSong }) =>
        selectedSong && (
          <StyledListeningTo>
            <p className='song'>
              Estás escuchando: <span className='name'>{selectedSong.title}</span>
            </p>
            <p className='artist'>
              Artista: <span className='name'>{selectedSong.artist}</span>
            </p>
            <p className='album'>
              Álbum: <span className='name'>{selectedSong.album}</span>
            </p>
          </StyledListeningTo>
        )
      }
    </MusicContextConsumer>
  );
}

export default ListeningTo;
