export const fetchOptions = (
  method: 'POST' | 'PATCH' | 'DELETE' | 'GET',
  body: any
) => {
  const token = localStorage.getItem('x-auth-token') ?? '';

  if (body !== null || method !== 'GET')
    return {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': `${token}`,
      },
      body: JSON.stringify(body),
    };

  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': `${token}`,
    },
  };
};
