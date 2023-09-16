import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const videoSlice = createSlice({
  name: "video",
  initialState: [],

  reducers: {
    setVideos: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setVideos } = videoSlice.actions;
export default videoSlice.reducer;

// THUNK for fetching videos
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
// const apiKey = process.env.REACT_APP_RAPID_API_KEY;
const options = {
  method: "GET",
  params: {
    //   q: 'coding',
    //   part: 'snippet,id',
    regionCode: "IN",
    maxResults: "50",
    // order: 'date'
  },
  headers: {
    "X-RapidAPI-Key": "8001b5ad1bmsh1b1dd7309c2f2e9p1a5e3cjsnf618572cfb86",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export function fetchVideos(url) {
  return async function fetchVideosThunk(dispatch, getState) {
    dispatch(setVideos([]));
    try {
      const { data } = await axios.request(`${BASE_URL}/${url}`, options);
      dispatch(setVideos(data.items));
      console.log(data.items, "dataTHUNK");
    } catch (err) {
      console.log(err);
    }
  };
}
