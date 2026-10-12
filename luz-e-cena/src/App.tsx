import './App.css';
import ImageBanner from './assets/Imagens/Banner_principal/Banner_principal_desktop.png';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <h1>Luz & Cena</h1>
      <Banner src={ImageBanner} alt='Banner' />
    </>
  );
}

export default App;
