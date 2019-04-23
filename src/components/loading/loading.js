import React from 'react';
import './loading.scss';

const Loading = () => (
  <div className="loading__animation-elements-container">
    <div className="loading__animation-element last-element" />
    <div className="loading__animation-element central-element" />
    <div className="loading__animation-element main-element" />
    <div className="loading__animation-element central-element" />
    <div className="loading__animation-element last-element" />
  </div>
);

export default Loading;
