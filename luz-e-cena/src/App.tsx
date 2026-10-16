import './App.css';
import ImageBanner from './assets/Imagens/Banner_principal/Banner_principal_desktop.png';
import Banner from './components/Banner';
import Header from './components/Header';
import MovieSection from './components/MovieSection';

function App() {
  return (
    <>
      <Header />
      <Banner src={ImageBanner} alt='Banner' />
      <MovieSection />
    </>
  );
}

export default App;
