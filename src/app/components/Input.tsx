import { InputType } from '../../types/InputType';
import './Input.css';

const Input = ({ id, label, type, yup, placeholder, error }: InputType) => {
  return (
    <div className='input-wrapper'>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...yup} />
      <span>{error}</span>
    </div>
  );
};

export default Input;
