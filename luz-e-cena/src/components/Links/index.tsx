import type { AnchorHTMLAttributes, ReactNode } from 'react';
import Styles from './Link.module.css';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

const Link = ({ children, ...rest }: LinkProps) => {
  return (
    <a className={Styles.link} {...rest}>
      {children}
    </a>
  );
};

export default Link;
