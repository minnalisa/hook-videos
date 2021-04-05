import React, { useState, useEffect } from 'react';
import SearchItem from './SearchItem';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [clips, searchVid] = useVideos('music');

  useEffect(() => {
    setSelectedVideo(clips[0]);
  }, [clips]);

  return (
    <div className="ui container">
      <SearchItem onceSubmit={searchVid} />
      <div className="ui stackable grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail clip={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              searchResult={clips}
              onVideoSelect={(clip) => {
                setSelectedVideo(clip);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
