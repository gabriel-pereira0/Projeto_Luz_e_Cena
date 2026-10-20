import styles from './Footer.module.css';
import FooterDesenvolvimento from './FooterDesenvolvimento';
import FooterFuncionamento from './FooterFuncionamento';
import FooterInstitucional from './FooterInstitucional';
import FooterLogo from './FooterLogo';

const Footer = () => {
  return (
    <>
      <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
          <FooterLogo />
          <FooterFuncionamento />
          <FooterInstitucional />
        </div>
      </footer>
      <FooterDesenvolvimento />
    </>
  );
};

export default Footer;
