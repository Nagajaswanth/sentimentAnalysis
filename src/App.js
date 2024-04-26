import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrimaryScreen from './PrimaryScreen';
import LinkForm from './LinkForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PrimaryScreen />} />
        <Route path="/link-form" element={<LinkForm />} />
      </Routes>
    </Router>
  );
}

export default App;
