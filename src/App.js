import './App.css';
import Header from './Header';
import Footer from './Footer';
import Statistique from './Statistique';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <p>Bienvenue sur SénTransport</p>
        <Statistique />
        <Statistique />
        <Statistique />
      </main>

      <Footer />
    </div>
  );
}

export default App;