import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { userModel } from '../models/user/userModel';
import { CallApi, GetApi } from '../service/api/CallApi';

const ShoppingAssistantPage = () => {
  return (
    <>
      <Link to='/register'>register</Link>
      <Link to='/login'>login</Link>
    </>
  );
};

export default ShoppingAssistantPage;
