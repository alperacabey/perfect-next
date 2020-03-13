import React, { Fragment } from 'react';
import { Modal } from '@redq/reuse-modal';
import { ResetCSS } from 'assets/css/style';
import 'assets/css/flaticon.css';
import 'assets/css/icon-example-page.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '@redq/reuse-modal/es/index.css';
import '@glidejs/glide/dist/css/glide.core.min.css';

export default ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Modal />
      <Component {...pageProps} />
      <ResetCSS />
    </Fragment>
  );
};
