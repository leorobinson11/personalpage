import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/app.css';
import Header from './components/header';
import Footer from './components/footer';
import TypingEffect from './components/typingtext';
import Solarsystem from './components/solarsystem';
import Portfolio from './components/portfolio';
import Socials from './components/socials';
import Projects from "./components/projects";


const Home = () => {
  return (
    <main className="App">
      <section id="banner">
          <div class="banner-title">
            <h1> Hello, I'm <span style={{color:"red"}}>Leo</span>. <br/> <TypingEffect text={"I'm a developer."}/> </h1>
          </div>
          <Solarsystem class="solarsystem" />
      </section>

      <Header />

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="socials">
        <Socials />
      </section>

      <Footer />
    </main>
  );
};

const App = () => {
  return (
    <BrowserRouter basename="/personalpage">
      <Routes>
          <Route index element={<Home />} />
          <Route path="projects/:index" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
