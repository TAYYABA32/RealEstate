import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import Companies from "./Components/companies/Companies";
import Residencies from "./Components/Resiencies/Residencies";
import Value from "./Components/value/Value";
import Contact from "./Components/contact/Contact";
import Getstarted from "./Components/GetStarted/Getstarted";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <Getstarted />
        <Footer />
      </div>
    </div>
  );
}

export default App;
