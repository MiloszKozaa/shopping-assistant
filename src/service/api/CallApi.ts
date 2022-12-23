export const PostApi = <TData>(
  endpoint: string,
  body: any,
  onSuccess: (data: TData) => void,
  onError: (err: string) => void
) => {
  console.log(body);
  fetch(`https://shopping-assistant-server.vercel.app/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(data => onSuccess(data as TData))
    .catch(err => onError(err));
};
