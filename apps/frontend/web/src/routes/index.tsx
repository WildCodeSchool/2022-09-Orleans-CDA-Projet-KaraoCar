import { createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
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
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default router;
