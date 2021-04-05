import { useEffect, useState } from 'react';
import youtubeSearch from '../apis/youTube';

// setSelectedVideo(respond.data.items[0]);
// const [selectedVideo, setSelectedVideo] = useState(null);

const useVideos = (defaultSearchTerm) => {
  const [clips, setClips] = useState([]);

  useEffect(() => searchVid(defaultSearchTerm), [defaultSearchTerm]);

  const searchVid = async (searchInput) => {
    const respond = await youtubeSearch.get('/search', {
      params: {
        q: searchInput,
        type: 'video',
      },
    });
    setClips(respond.data.items);
  };

  return [clips, searchVid];
  // or {videos, onSearchSubmit}
};
export default useVideos;
