import axios from 'axios';

const KEY = 'AIzaSyD8XmKnXlR_fjq8h_f1nVVWkhMMoprA3nI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    key: KEY,
  },
});
