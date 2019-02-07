import React, { Component } from 'react';
import Link from 'next/link';
import RequireAuthentication from '../../components/RequireAuthentication';
import { StyledButton } from '../../styles/components/Common';
import StyledPage from '../../styles/pages/Home';
import Header from '../../components/Header';
import ListeningTo from '../../components/ListeningTo';

export class HomePage extends Component {
  state = {};

  render() {
    return (
      <RequireAuthentication>
        {({ username }) => (
          <StyledPage>
            <Header username={username} />

            <Link href='/list'>
              <StyledButton type='button'>Mis Canciones Favoritas</StyledButton>
            </Link>

            <ListeningTo />
          </StyledPage>
        )}
      </RequireAuthentication>
    );
  }
}

export default HomePage;
