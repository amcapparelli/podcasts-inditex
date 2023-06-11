import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./views/home/home";
import PodcastDetail from "./views/podcastDetail/podcastDetail";
import EpisodeDetail from "./views/episodeDetail/episodeDetail";

import { Header } from "./components";

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
        <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetail />} />
        <Route path="*" element={<p>page not found...</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
