import React, { Component } from 'react';
import RequireAuthentication from '../../components/RequireAuthentication';
import { GetData } from '../../utils/fetch';
import ArtistsList from '../../components/ArtistsList';

export class ListPage extends Component {
  state = {
    musicData: [],
  };

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

  render() {
    const { musicData } = this.state;
    return (
      <RequireAuthentication>
        {() => (
          <div>
            <ArtistsList artists={musicData} />
          </div>
        )}
      </RequireAuthentication>
    );
  }
}

export default ListPage;
