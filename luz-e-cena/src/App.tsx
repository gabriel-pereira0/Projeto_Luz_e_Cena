import './App.css';
import ImageBanner from './assets/Imagens/Banner_principal/Banner_principal_desktop.png';
import ImageBannerPipoca from './assets/Imagens/Banner_combo_pipoca/Banner_combo_desktop.png';
import Banner from './components/Banner';
import Header from './components/Header';
import MovieSection from './components/MovieSection';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <>
      <Header />
      <Banner src={ImageBanner} alt='Banner' />
      <MovieSection />
      <Banner src={ImageBannerPipoca} alt='Banner Pipoca' />
      <Newsletter />
    </>
  );
}

export default App;
