import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./views/home/home";
import PodcastDetail from "./views/podcastDetail/podcastDetail";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
        <Route path="*" element={<p>page not found...</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
