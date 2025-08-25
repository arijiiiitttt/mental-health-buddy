import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Layout';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Default from './Default';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Signin from './Signin';
import Signup from './Signup';
import ProtectedRoute from '../ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default landing page with redirect logic */}
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <Navigate to="/home" />
              </SignedIn>
              <SignedOut>
                <Default />
              </SignedOut>
            </>
          }
        />

        {/* Routes with Layout */}
        <Route element={<Layout />}>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Auth pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
