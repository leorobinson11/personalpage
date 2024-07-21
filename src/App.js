import './styles/app.css';
import Header from './components/header';
import Footer from './components/footer';
import Solarsystem from './components/solarsystem';
import Portfolio from './components/portfolio';

function App() {
  return (
    <main className="App">
      <section id="banner">
          <div class="banner-title">
            <h1> Hello, I'm <span style={{color:"red"}}>Leo</span>. <br/> I'm a developer.</h1>
          </div>
          <Solarsystem class="solarsystem" />
      </section>

      <Header />

      <section id="portfolio">
        <Portfolio />
      </section>

      <Footer />
    </main>
  );
}

export default App;
