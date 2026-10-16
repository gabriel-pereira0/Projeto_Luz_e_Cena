import React from 'react';
import styles from '../Header.module.css';

type HeaderListItemProps = {
  children: React.ReactNode;
} & React.LiHTMLAttributes<HTMLLIElement>;

const HeaderListItem = ({ children }: HeaderListItemProps) => {
  return <li className={styles.menuitem}>{children}</li>;
};

export default HeaderListItem;
