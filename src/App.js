import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetters from "./components/NewsLetters";

function App() {
  return (
    <div className="text-white">
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetters />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
