import { useQuery } from 'react-query';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { userModel } from './models/user/userModel';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import ShoppingAssistantPage from './page/ShoppingAssistantPage';
import { GetApi } from './service/api/CallApi';
import HomePage from './page/HomePage';
import { useEffect, useState } from 'react';
import PrivateRouter from './components/PrivateRouter';

function App() {
  return (
    <div className='App'>
      <div className='App-desktop-wrapper'>
        <Routes>
          <Route path='/' element={<ShoppingAssistantPage />} />
          <Route
            path='/home'
            element={<PrivateRouter Element={() => <HomePage />} />}
          />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          {/* <Route path='*' element={<NotFound />} />  */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
