import './App.css';
import ImageBanner from './assets/Imagens/Banner_principal/Banner_principal_desktop.png';
import ImageBannerPipoca from './assets/Imagens/Banner_combo_pipoca/Banner_combo_desktop.png';
import TarjetaFooter from './assets/Imagens/TarjetaDesktop.png';
import Banner from './components/Banner';
import Header from './components/Header';
import MovieSection from './components/MovieSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Banner src={ImageBanner} alt='Banner' />
      <MovieSection />
      <Banner src={ImageBannerPipoca} alt='Banner Pipoca' />
      <Newsletter />
      <Banner src={TarjetaFooter} alt='Tarjeta Footer' />
      <Footer />
    </>
  );
}

export default App;
