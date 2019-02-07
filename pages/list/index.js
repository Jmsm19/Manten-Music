import React, { Component } from 'react';
import RequireAuthentication from '../../components/RequireAuthentication';
import ArtistsList from '../../components/ArtistsList';
import StyledPage from '../../styles/pages/List';
import AlbumList from '../../components/AlbumsList';
import SongsList from '../../components/SongsList';
import { MusicContextConsumer } from '../../context/MusicContext';

export class ListPage extends Component {
  getAlbums = (artists, artistName) => {
    if (artists.length > 0) {
      const { albums } = artists.filter(item => item.artist === artistName)[0];
      return albums;
    }
    return [];
  };

  getSongs = (artists, artistName, albumName) => {
    if (artistName && albumName) {
      const albums = this.getAlbums(artists, artistName);
      if (albums.length > 0) {
        const { songs } = albums.filter(album => album.name === albumName)[0];
        return songs;
      }
    }
    return [];
  };

  render() {
    return (
      <RequireAuthentication>
        {() => (
          <StyledPage>
            <MusicContextConsumer>
              {({ musicData, selectedArtist, selectedAlbum }) => (
                <>
                  <ArtistsList artists={musicData} />

                  <div className='albums-songs'>
                    {selectedArtist && (
                      <AlbumList albums={this.getAlbums(musicData, selectedArtist)} />
                    )}
                    {selectedArtist && selectedAlbum && (
                      <SongsList songs={this.getSongs(musicData, selectedArtist, selectedAlbum)} />
                    )}
                  </div>
                </>
              )}
            </MusicContextConsumer>
          </StyledPage>
        )}
      </RequireAuthentication>
    );
  }
}

export default ListPage;
