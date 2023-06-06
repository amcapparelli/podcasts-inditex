import React from "react";
import { useQuery } from "react-query";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { getPodcasts } from "./utils/api/getPodcasts";

function App() {
  const { data, status } = useQuery('podcasts', getPodcasts, {
    cacheTime: 86400000, // 24 hours in milliseconds
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <p>HOME!!</p>
        } />
        <Route path="*" element={<p>page not found...</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
