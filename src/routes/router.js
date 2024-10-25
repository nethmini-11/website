import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/main';
import Home from '../pages/home';
import ProductPage from '../pages/product';



const AppRouter = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
);

export default AppRouter;
