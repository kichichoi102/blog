// import logo from './logo.svg';
import './App.css';
import AppRoutes from './Routes';
import React from 'react';
import { TopNavBar } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * @return {jsx}
 */
function App() {
  return (
    <>
      <TopNavBar />
      <AppRoutes />
    </>
  );
}

export default App;
