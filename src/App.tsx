import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import ShoppingAssistantPage from './page/ShoppingAssistantPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ShoppingAssistantPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
