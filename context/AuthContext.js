/* eslint-disable react/sort-comp */
import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Router from 'next/router';
import { SendData } from '../utils/fetch';

const AuthContext = createContext({});

class AuthContextProvider extends Component {
  handleLogin = (values, { setSubmitting }) => {
    NProgress.start();
    SendData('POST', '/user', values)
      .then(data => data.json())
      .then(({ data, error }) => {
        if (error) {
          throw Error(error);
        } else {
          NProgress.done();
          this.setState(
            () => ({
              isAuth: true,
              username: data.username,
            }),
            () => {
              setSubmitting(false);
              Router.push('/home');
            },
          );
        }
      })
      .catch(({ message }) => {
        this.setState(
          () => ({
            serverErrorMessage:
              message === 'Failed to fetch'
                ? 'Error de conexión. Comprueba tu conexión a internet.'
                : message,
          }),
          () => {
            NProgress.done();
            setSubmitting(false);
          },
        );
      });
  };

  selectSong = name => {
    this.setState(prevState => ({
      selectedSong: prevState.selectSong === name ? null : name,
    }));
  };

  selectAlbum = name => {
    this.setState(prevState => ({
      selectedAlbum: prevState.selectedAlbum === name ? null : name,
    }));
  };

  selectArtist = name => {
    this.setState(prevState => ({
      selectArtist: prevState.selectArtist === name ? null : name,
    }));
  };

  state = {
    handleLogin: this.handleLogin,
    isAuth: false,
    username: null,
    serverErrorMessage: '',

    selectSong: this.selectSong,
    selectAlbum: this.selectAlbum,
    selectArtist: this.selectArtist,
    selectedSong: null,
    selectedAlbum: null,
    selectedArtist: null,
  };

  render() {
    const { children } = this.props;

    return <AuthContext.Provider value={{ ...this.state }}>{children}</AuthContext.Provider>;
  }
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const AuthContextConsumer = AuthContext.Consumer;

export { AuthContext, AuthContextProvider, AuthContextConsumer };
