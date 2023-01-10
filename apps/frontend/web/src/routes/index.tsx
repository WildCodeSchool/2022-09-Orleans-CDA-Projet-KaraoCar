import { createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Search from '../pages/Search';
import Home from '../pages/Home';

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
        element: <Home />,
      },
    ],
  },
]);

export default router;
