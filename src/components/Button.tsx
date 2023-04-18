import './Button.css';

type ButtonType = {
  name: string;
  click?: () => void;
};

const Button = ({ click, name }: ButtonType) => {
  return (
    <button onClick={click} className='submit-button'>
      {name}
    </button>
  );
};

export default Button;
