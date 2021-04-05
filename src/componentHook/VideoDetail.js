import React from 'react';

const VideoDetail = ({ clip }) => {
  if (!clip) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <div className="ui embed">
        <iframe
          title="video player"
          src={`https://www.youtube.com/embed/${clip.id.videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ui inverted segment">
        <h4 className="ui header">{clip.snippet.title}</h4>
        <p>{clip.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/qFLhGq0060w"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;
