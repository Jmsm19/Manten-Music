/* eslint-disable react/sort-comp */
import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import { GetData } from '../utils/fetch';

const MusicContext = createContext({});

class MusicContextProvider extends Component {
  componentDidMount() {
    GetData('/artist')
      .then(res => res.json())
      .then(({ data }) => {
        this.setState({
          musicData: data,
        });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  selectSong = title => {
    this.setState(prevState => ({
      ...prevState,
      selectedSong:
        prevState.selectedSong && prevState.selectedSong.title === title
          ? null
          : {
              title,
              artist: prevState.selectedArtist,
              album: prevState.selectedAlbum,
            },
    }));
  };

  selectAlbum = name => {
    this.setState(prevState => ({
      selectedAlbum: prevState.selectedAlbum === name ? null : name,
    }));
  };

  selectArtist = name => {
    this.setState(prevState => ({
      selectedArtist: prevState.selectedArtist === name ? null : name,
      selectedAlbum: '',
    }));
  };

  state = {
    musicData: [],
    selectSong: this.selectSong,
    selectAlbum: this.selectAlbum,
    selectArtist: this.selectArtist,
    selectedSong: null,
    selectedAlbum: '',
    selectedArtist: '',
  };

  render() {
    const { children } = this.props;

    return <MusicContext.Provider value={{ ...this.state }}>{children}</MusicContext.Provider>;
  }
}

MusicContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const MusicContextConsumer = MusicContext.Consumer;

export { MusicContext, MusicContextProvider, MusicContextConsumer };
