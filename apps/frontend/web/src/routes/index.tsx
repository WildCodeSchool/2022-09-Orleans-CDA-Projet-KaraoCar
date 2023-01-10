import { createBrowserRouter, Outlet } from 'react-router-dom';
import CreateTrip from '../pages/CreateTrip';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

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
      {
        path: '/create-trip',
        element: <CreateTrip />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
