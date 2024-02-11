import './App.css';
import Header from './components/Header';
import BarraMenus from './components/BarraMenus';
import Body from './components/Body';
import Footer from './components/Footer';
function App() {
  return (
    <div className="conteinerPrincipal">
      <Header />
	  <div className="box">
	<BarraMenus />
	  </div>
	<Body />
      <Footer />
    </div>
  );
}

export default App;
