import { CartPage } from '@/pages/CartPage';
import { MenuPage } from '@/pages/MenuPage';
import { DetailPage } from '@/pages/DetailPage';
import { CompletePage } from '@/pages/CompletePage';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/menu',
    element: <MenuPage />,
  },
  {
    path: '/detail',
    element: <DetailPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/complete',
    element: <CompletePage />,
  },
  {
    path: '*',
    element: <Navigate to="/menu" replace={true} />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
