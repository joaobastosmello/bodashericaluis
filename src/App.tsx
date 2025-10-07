import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Gifts from './pages/Gifts';
import Invitation from './pages/Invitation';
import Payment from './pages/Payment';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="presentear" element={<Gifts />} />
          <Route path="convite" element={<Invitation />} />
          <Route path="pagamento/:valor" element={<Payment />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;