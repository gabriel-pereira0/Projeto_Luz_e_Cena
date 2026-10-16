import styles from './Header.module.css';
import Logo from '../Logo';
import HeaderActions from './components/HeaderActions';
import HeaderFormFilters from './components/HeaderFormFilters';
import HeaderLinks from './components/HeaderLinks';
import HeaderList from './components/HeaderList';
import HeaderListItem from './components/HeaderListItem';

const Header = () => {
  return (
    <header>
      <HeaderList className={styles.cabecalho}>
        <HeaderListItem>
          <Logo src='/Logo_azul.png' alt='Logo da empresa' />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderLinks />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderFormFilters />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderActions />
        </HeaderListItem>
      </HeaderList>
    </header>
  );
};

export default Header;
