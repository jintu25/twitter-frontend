import React from 'react';
import ReactDOM from 'react-dom/client';
// Import Provider from react-redux
import router from "../src/components/routes/routes"
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './index.css';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import persistStore from 'redux-persist/es/persistStore';

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster />
      </PersistGate>  
    </Provider>
  </React.StrictMode>
);
