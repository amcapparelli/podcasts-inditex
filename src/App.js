import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./views/home";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>page not found...</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
