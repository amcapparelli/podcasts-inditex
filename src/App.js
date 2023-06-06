import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
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
