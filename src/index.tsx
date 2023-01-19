import React from 'react';
import ReactDOM from 'react-dom/client';

import { Navbar } from '@components';

const root = document.getElementById('root');

if (root === null) {
  console.error('No root found in index.html, please contact an admin');
} else {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Navbar />
    </React.StrictMode>
  );
}

