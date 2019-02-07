import React from 'react';
import Head from 'next/head';
import { APP_NAME } from '../../config';

const Meta = () => (
  <Head>
    {/* Common metas */}
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta charSet='utf-8' />
    <meta name='Description' content='Author: Jorge Soto, Name: Manten Music' />
    {/* Icons */}
    <link rel='apple-touch-icon' sizes='180x180' href='/static/icons/apple-touch-icon.png' />
    <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
    <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />
    {/* App related meta tags */}
    <meta name='apple-mobile-web-app-title' content='Manten Music' />
    <meta name='application-name' content='Manten Music' />
    <meta name='msapplication-TileColor' content='#bf1a21' />
    <meta name='theme-color' content='#bf1a21' />
    {/* Styles */}
    <link rel='stylesheet' href='/static/styles/nprogress.css' />
    <link rel='stylesheet' href='/static/styles/styles.css' />
    <link
      rel='stylesheet'
      href='https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css'
      integrity='sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS'
      crossOrigin='anonymous'
    />
    {/* Fonts */}
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato:300,400,700' />
    {/* Title */}
    <title>{APP_NAME}</title>
  </Head>
);

export default Meta;
