import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { base, themed } from '../base';

const ImageWrapper = styled('img')(
  {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
  base,
  themed('Image')
);

export const Image = ({ src, alt, ...props }) => (
  <ImageWrapper src={src} alt={alt} {...props} />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  m: 0,
};
