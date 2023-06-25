// import React from 'react';

// import PropTypes from 'prop-types';

// export const Image = ({ src, alt, height, width, ...attrs }) => {
//     if (!src) {
//       src = `https://t4.ftcdn.net/jpg/05/04/07/83/360_F_504078395_9Fo5jWrwI8Pbfr6hrPRUvUMsjR1R3Pvy.jpg ${width}×${height}`;
//       }

//   return <img src={src} alt={alt} width={width} height={height} {...attrs} />;
// };

// Image.defaultProps = {
//   src: '',
//   alt: 'image name',
//   width: 100,
//   height: 100,
// };

// Image.propTypes = {
//   src: PropTypes.string,
//   alt: PropTypes.string,
//   width: PropTypes.number,
//   height: PropTypes.number,
// };

import { FiPhoneCall } from 'react-icons/fi';
export const Image = () => {
  return (
    <h3>
      {' '}
      Welcome to the phone book <FiPhoneCall />{' '}
    </h3>
  );
};
