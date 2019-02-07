import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import Page from '../components/Page';
import Meta from '../components/Meta';
import { AuthContextProvider, AuthContextConsumer } from '../context/AuthContext';
import { MusicContextProvider } from '../context/MusicContext';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class MyApp extends App {
  static async getInitialProps({ Component, _, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <AuthContextProvider>
          <MusicContextProvider>
            <AuthContextConsumer>
              {({ isAuth }) => (
                <Page isAuth={isAuth}>
                  <Meta />
                  <Component {...pageProps} isAuth={isAuth} />
                </Page>
              )}
            </AuthContextConsumer>
          </MusicContextProvider>
        </AuthContextProvider>
      </Container>
    );
  }
}

export default MyApp;
