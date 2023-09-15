import axios from 'axios';

const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do/';

const fetchTopAlbums = async () => {
  try{
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return res;
  }catch(err){
    console.log(err);
  }
}

export default fetchTopAlbums;