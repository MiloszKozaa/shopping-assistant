import './Input.css';

type InputType = {
  type: string;
  id: string;
  label: string;
  placeholder?: string;
  yup?: any;
  error?: any;
};

const Input = ({ id, label, type, yup, placeholder, error }: InputType) => {
  return (
    <div className={`input-wrapper${error ? '-error' : ''}`}>
      <div className='input-wrapper-label'>{label}</div>
      <input
        className='input-wrapper-input'
        type={type}
        id={id}
        placeholder={placeholder}
        {...yup}
      />
      {yup && (
        <span className={error ? `input-error` : 'input-empty-error'}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
