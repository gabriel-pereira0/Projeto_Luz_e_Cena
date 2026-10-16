// import Styles from './Header.module.css';
import styles from './Header.module.css';
import Logo from '../Logo';
import HeaderActions from './components/HeaderActions';
import HeaderFormFilters from './components/HeaderFormFilters';
import HeaderLinks from './components/HeaderLinks';
import HeaderList from './components/HeaderList';
import HeaderListItem from './components/HeaderListItem';

const Header = () => {
  return (
    <header className={styles.cabecalho}>
      <HeaderList>
        <HeaderListItem>
          <Logo
            src='/Logo_azul.png'
            alt='Logo da empresa'
            width={100}
            height={50}
          />
        </HeaderListItem>
        <HeaderListItem className={styles.menuitem}>
          <HeaderLinks />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderFormFilters />
        </HeaderListItem>
        <HeaderListItem className={styles.icones}>
          <HeaderActions />
        </HeaderListItem>
      </HeaderList>
    </header>
  );
};

export default Header;
