import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com',
    params: {
    //   q: 'coding',
    //   part: 'snippet,id',
      regionCode: 'IN',
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': '8001b5ad1bmsh1b1dd7309c2f2e9p1a5e3cjsnf618572cfb86',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromApi = async (url) => {
    const {data} =   await axios.request(`${BASE_URL}/${url}`, options);
    console.log(data);

    return data;
}