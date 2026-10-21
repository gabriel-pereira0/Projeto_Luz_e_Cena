import Link from '../Links';
import styles from './Footer.module.css';

const FooterInstitucional = () => {
  return (
    <div className={styles.institucional}>
      <h4 className={styles.titulo}>Institucional</h4>
      <Link href='#' className={styles.ancora}>
        Sobre nós
      </Link>
      <Link href='#' className={styles.ancora}>
        Para empresas
      </Link>
      <Link href='#' className={styles.ancora}>
        Club Fidelidade
      </Link>
    </div>
  );
};

export default FooterInstitucional;
