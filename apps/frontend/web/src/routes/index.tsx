import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from '../App';
import Navbar from '../components/navbar/Navbar';
import Search from '../pages/Search'

const NavLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/',
        element: <App />,
      },
    ],
  },
]);

export default router;
