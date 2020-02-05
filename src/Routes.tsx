import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductPage from './ProductPage';
import AdminPage from './AdminPage';

const Routes: React.FC = () => {
  return (
    <Router>
      <div>
        <Route path="/products" component={ProductPage} />
        <Route path="/admin" component={AdminPage} />
      </div>
    </Router>
  )
}

export default Routes;