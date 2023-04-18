import { Link } from 'react-router-dom';
import './TextLink.css';

type TextLinkType = {
  endpoint: string;
  children: React.ReactNode;
};

const TextLink = ({ endpoint, children }: TextLinkType) => {
  return (
    <Link className='textLink' to={endpoint}>
      {children}
    </Link>
  );
};

export default TextLink;
