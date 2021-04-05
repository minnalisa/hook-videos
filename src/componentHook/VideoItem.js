import React from 'react';
import './videoItem.css';

const VideoItem = ({ clip, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(clip)}>
      <img
        className="ui image"
        src={clip.snippet.thumbnails.medium.url}
        alt={clip.snippet.title}
      />
      <div className="content">{clip.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
