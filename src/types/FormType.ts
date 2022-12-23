export type formType = {
  title: string;
  detail: string;
  error?: string;
  submit: (data: any) => void;
  children: React.ReactNode;
};
