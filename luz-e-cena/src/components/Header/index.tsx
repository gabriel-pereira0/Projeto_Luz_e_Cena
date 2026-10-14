// import Styles from './Header.module.css';
import Link from '../Links';
import HeaderList from './components/HeaderList';
import HeaderListItem from './components/HeaderListItem';

const Header = () => {
  return (
    <header>
      <HeaderList>
        <HeaderListItem>
          <Link href='/' target='_blank'>
            Eventos
          </Link>
        </HeaderListItem>
        <HeaderListItem>
          <Link href='/' target='_blank'>
            Club fidelidade
          </Link>
        </HeaderListItem>
        <HeaderListItem>
          <Link href='/' target='_blank'>
            Sobre nós
          </Link>
        </HeaderListItem>
      </HeaderList>
    </header>
  );
};

export default Header;
