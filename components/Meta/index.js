import React from 'react';
import Head from 'next/head';
import { APP_NAME } from '../../config';

const Meta = () => (
  <Head>
    {/* Common metas */}
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta charSet='utf-8' />
    <meta name='Description' content='Author: Jorge Soto, Name: Manten Music' />
    {/* Styles */}
    <link rel='stylesheet' href='/static/styles/styles.css' />
    <link rel='stylesheet' href='/static/styles/nprogress.css' />
    <link
      rel='stylesheet'
      href='https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css'
      integrity='sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS'
      crossOrigin='anonymous'
    />
    <link
      rel='stylesheet'
      href='https://use.fontawesome.com/releases/v5.7.1/css/all.css'
      integrity='sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr'
      crossOrigin='anonymous'
    />
    {/* Fonts */}
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato:300,400,700' />
    {/* Title */}
    <title>{APP_NAME}</title>
  </Head>
);

export default Meta;
