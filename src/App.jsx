import Navbar from "./components/Navbar";
import '../src/style/App.css'
import Hero from "./components/Hero";
import InfoTop from "./components/InfoTop";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import InfoButton from "./components/InfoButton";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <InfoTop />
        <Banner />
        <InfoButton />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
