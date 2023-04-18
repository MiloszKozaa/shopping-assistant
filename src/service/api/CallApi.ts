import { useNavigate } from 'react-router-dom';
import { responseModel } from '../../models/api/responseModel';

export const CallApi = async <TData>(
  endpoint: string,
  method: 'POST' | 'PATCH' | 'DELETE',
  body: any
) => {
  const response = await fetch(`http://localhost:9002/${endpoint}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    credentials: 'include' as RequestCredentials,
  });
  const data = await response.json();
  if (data.status === 401) {
    console.log('401');
    return data as responseModel<TData>;
  }
  return data as responseModel<TData>;
};

export const GetApi = async <TData>(endpoint: string) => {
  const response = await fetch(`http://localhost:9002/${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include' as RequestCredentials,
  });
  const data = await response.json();

  return data as responseModel<TData>;
};
