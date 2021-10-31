import { Navigate } from 'react-router-dom';
import DashboardLayout from '@components/DashboardLayout';
import MainLayout from '@components/MainLayout';
import Account from './views/Account';
import CustomerList from './views/CustomerList';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import NotFound from './views/NotFound';
import ProductList from './views/ProductList';
import Register from './views/Register';
import Settings from './views/Settings';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
