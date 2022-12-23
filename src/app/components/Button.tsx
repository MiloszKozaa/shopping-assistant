import { ButtonType } from '../../types/ButtonType';
import './Button.css';

const Button = ({ click, name }: ButtonType) => {
  return (
    <button onClick={click} className='submit-button'>
      {name}
    </button>
  );
};

export default Button;
