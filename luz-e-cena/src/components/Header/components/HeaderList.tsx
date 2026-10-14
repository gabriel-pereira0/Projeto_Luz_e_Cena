import React from 'react';
import styles from '../Header.module.css';

type HeaderListProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLUListElement>;

const HeaderList = ({ children, ...rest }: HeaderListProps) => {
  return (
    <ul className={styles.menuitem} {...rest}>
      {children}
    </ul>
  );
};

export default HeaderList;
