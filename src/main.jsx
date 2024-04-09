import React from 'react';
import ReactDOM from 'react-dom/client';
// Import Provider from react-redux
import router from "../src/components/routes/routes"
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './index.css';
import { Provider } from 'react-redux'
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </React.StrictMode>
);
