import Styles from './Header.module.css';
import Link from '../Links';

const Header = () => {
  return (
    <header className={Styles.Container}>
      <Link href='/' target='_blank'>
        Eventos
      </Link>
      <Link href='/' target='_blank'>
        Club fidelidade
      </Link>
      <Link href='/' target='_blank'>
        Sobre nós
      </Link>
    </header>
  );
};

export default Header;
