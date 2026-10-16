import React from 'react';
import Link from '../../Links';

interface MenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  href?: string;
}

const MenuItem = ({ children, href = '#' }: MenuItemProps) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default MenuItem;
