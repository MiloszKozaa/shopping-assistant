import { Link } from 'react-router-dom';
import { TextLinkType } from '../../types/TextLinkType';
import './TextLink.css';

const TextLink = ({ endpoint, children }: TextLinkType) => {
  return <Link className='textLink' to={endpoint}>{children}</Link>;
};

export default TextLink;
