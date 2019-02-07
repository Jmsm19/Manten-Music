/* eslint-disable react/sort-comp */
import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const MusicContext = createContext({});

class MusicContextProvider extends Component {
  selectSong = name => {
    this.setState(prevState => ({
      selectedSong: prevState.selectedSong === name ? null : name,
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
    }));
  };

  state = {
    selectSong: this.selectSong,
    selectAlbum: this.selectAlbum,
    selectArtist: this.selectArtist,
    selectedSong: null,
    selectedAlbum: null,
    selectedArtist: null,
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
