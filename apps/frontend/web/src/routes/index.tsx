import { createBrowserRouter, Outlet } from 'react-router-dom';
import CreateTrip from '../pages/CreateTrip';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/Home';
import Chat from '../pages/Chat';

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
        path: '/chat',
        element: <Chat />,
      },
    ],
  },
]);

export default router;
