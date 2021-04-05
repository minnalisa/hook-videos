import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ searchResult, onVideoSelect }) => {
  const renderList = searchResult.map((clip) => {
    return (
      <VideoItem
        key={clip.id.videoId}
        clip={clip}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
