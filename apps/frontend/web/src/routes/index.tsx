import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from '../App';
import Navbar from '../components/navbar/Navbar';
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
        element: <App />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
    ],
  },
]);

export default router;
