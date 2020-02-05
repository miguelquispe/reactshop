import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductPage from './ProductPage';
import AdminPage from './AdminPage';
import Header from './Header';

const Routes: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/products" component={ProductPage} />
        <Route path="/admin" component={AdminPage} />
      </div>
    </Router>
  )
}

export default Routes;