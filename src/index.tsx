import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApplicationWrapper } from './layouts/Wrapper/Wrapper';
import { Landing } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Landing/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApplicationWrapper>
      <RouterProvider router={router} />
    </ApplicationWrapper>
  </React.StrictMode>
);
