import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DataSourceContext } from './context/DataSourceContext';
import { FormDataContext } from './context/FormDataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataSourceContext>
        <FormDataContext>
          <App />
        </FormDataContext>
      </DataSourceContext>
    </BrowserRouter>
  </React.StrictMode>
);