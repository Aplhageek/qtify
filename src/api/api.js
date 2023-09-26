import axios from 'axios';

const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do/';

const getDataFromApi = async (path) => {
  try{
    const res = await axios.get(`${BACKEND_ENDPOINT}/${path}`);
    return res;
  }catch(err){
    console.log(err);
  }
}
 
export default getDataFromApi;