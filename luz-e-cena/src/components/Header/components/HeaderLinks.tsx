import MenuList from '../../Menu/MenuList';
import MenuItem from '../../Menu/MenuItem';

const HeaderLinks = () => {
  return (
    <MenuList>
      <MenuItem href='/'>Eventos</MenuItem>
      <MenuItem href='/sobre'>Clube fidelidade</MenuItem>
      <MenuItem href='/contato'>Sobre nós</MenuItem>
    </MenuList>
  );
};

export default HeaderLinks;
