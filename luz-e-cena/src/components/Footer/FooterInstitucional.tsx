import Link from '../Links';
import styles from './Footer.module.css';

const FooterInstitucional = () => {
  return (
    <div className={styles.institucional}>
      <h4 className={styles.titulo}>Institucional</h4>
      <Link href='#'>Sobre nós</Link>
      <Link href='#'>Para empresas</Link>
      <Link href='#'>Club Fidelidade</Link>
    </div>
  );
};

export default FooterInstitucional;
