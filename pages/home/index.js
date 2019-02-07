import React, { Component } from 'react';
import Link from 'next/link';
import RequireAuthentication from '../../components/RequireAuthentication';
import { MusicContextConsumer } from '../../context/MusicContext';

export class HomePage extends Component {
  state = {};

  render() {
    return (
      <RequireAuthentication>
        {({ username }) => (
          <>
            <h1>Bienvenido, {username}</h1>
            <MusicContextConsumer>
              {({ selectedSong, selectedArtist, selectedAlbum }) =>
                selectedSong && (
                  <div>
                    <p>Estás escuchando: {selectedSong}</p>
                    <p>Artista: {selectedArtist}</p>
                    <p>Álbum: {selectedAlbum}</p>
                  </div>
                )
              }
            </MusicContextConsumer>
            <Link href='/list'>
              <button type='button'>Mis Canciones Favoritas</button>
            </Link>
          </>
        )}
      </RequireAuthentication>
    );
  }
}

export default HomePage;
