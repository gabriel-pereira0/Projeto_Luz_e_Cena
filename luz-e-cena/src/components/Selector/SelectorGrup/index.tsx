import React from 'react';
import styles from './SelectorGrup.module.css';

type SelectorGroupProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  defaultValue?: string;
} & React.HTMLAttributes<HTMLSelectElement>;

const SelectorGroup = (props: SelectorGroupProps) => {
  const { children, icon, defaultValue, ...rest } = props;
  return (
    <div className={styles.container}>
      {icon && <span className={styles.icone}>{icon}</span>}
      <select className={styles.selector} defaultValue={defaultValue} {...rest}>
        {children}
      </select>
    </div>
  );
};

export default SelectorGroup;
