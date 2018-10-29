import React from 'react';
import ReactLoading from 'react-loading';
import randomColor from 'randomcolor';

const LoadingBalls = () => (
  <ReactLoading type={'spinningBubbles'} color={randomColor()} className='loading' width='5vw' />
);

export default LoadingBalls;