import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Feed, Navbar, VideoDetail, ChannelDetail, SearchFeed } from './container';
import './App.css';


const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path="/" exace element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
