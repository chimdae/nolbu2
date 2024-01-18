// App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Category from './components/Category';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Category />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
