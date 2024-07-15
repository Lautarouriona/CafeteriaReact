import './App.css'
import Navbar from './components/Navbar';
import Header from './layout/Header';
import MainContent from './layout/MainContent';
import Footer from './layout/Footer';
import Nosotros from './layout/Nosotros';
import Galeria from './layout/Galeria';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Nosotros />
      <MainContent/>
      <Footer/>
    </>
  );
}

export default App
