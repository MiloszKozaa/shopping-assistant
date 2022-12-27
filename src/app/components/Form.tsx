import { formType } from '../../types/FormType';
import './Form.css';

const Form = ({ title, detail, error, submit, children }: formType) => {
  return (
    <div className='form-wrapper'>
      <div>
        <h1>{title}</h1>
        <h4>{detail}</h4>
      </div>
      {error ? <span>{error}</span> : null}
      <form onSubmit={submit}>{children}</form>
    </div>
  );
};

export default Form;
