import { Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { GetApi } from '../service/api/CallApi';
import { userModel } from '../models/user/userModel';

type PrivateRouter = {
  Element: () => JSX.Element;
};

const PrivateRouter = ({ Element }: PrivateRouter) => {
  const navigate = useNavigate();

  const { data, status } = useQuery({
    queryKey: ['user'],
    queryFn: () => GetApi<userModel>('user'),
  });

  useEffect(() => {
    if (status === 'success' && data.status === 401) {
      console.error('It is a private router. Navigating to login...');
      navigate('/login');
    }
  }, [data]);

  return <Element />;
};

export default PrivateRouter;
