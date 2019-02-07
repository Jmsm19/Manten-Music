import styled from 'styled-components';

const StyledPage = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 30px;

  .albums-songs {
    display: grid;
    grid-template-rows: max-content 1fr;
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }

  .artists-list {
    .list-area {
      max-height: 150px;
      overflow-y: auto;
    }
  }

  .artists-list,
  .songs-list,
  .albums-list {
    .list-title {
      text-transform: uppercase;
      border-bottom: 2px solid var(--wine);
      width: max-content;
      padding-bottom: 5px;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    .artists-list {
      .list-area {
        max-height: 150px;
        overflow-y: auto;
        .list {
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(4, minmax(max-content, 100px));
        }
      }
    }

    .albums-songs {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: minmax(300px, max-content) 1fr;
    }
  }
`;

export default StyledPage;
