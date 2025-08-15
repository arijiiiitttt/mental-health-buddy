import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TraumaRelief from '../code/TraumaRelief';


function Home() {
  return (
    <>
     <TraumaRelief/>
    </>
  );
}
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for the Home page, renders the Home component */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;