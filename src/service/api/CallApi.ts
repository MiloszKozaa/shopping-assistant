import { fetchOptions } from '../../models/api/fetchOptions';
import { responseModel } from '../../models/api/responseModel';

export const CallApi = <TData>(
  endpoint: string,
  method: 'POST' | 'PATCH' | 'DELETE' | 'GET',
  body: any,
  onSuccess: (data: responseModel<TData>) => void,
  onError: (err: string) => void
) => {
  fetch(
    `https://shopping-assistant-server.vercel.app/${endpoint}`,
    fetchOptions(method, body)
  )
    // fetch(`http://localhost:9002/${endpoint}`, fetchOptions(method, body))
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return onSuccess(data as responseModel<TData>);
    })
    .catch(err => onError(err));
};
