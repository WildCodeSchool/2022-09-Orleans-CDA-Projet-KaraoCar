import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from '../App';
import CreateTrip from '../pages/CreateTrip';
import Navbar from '../components/navbar/Navbar';

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
        path: '/create-trip',
        element: <CreateTrip />,
      }
    ],
  },
]);

export default router;
