import axios from 'axios';

export default axios.create({
  baseURL: 'https://us-central1-opto-room.cloudfunctions.net/api',
});
