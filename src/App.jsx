import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import Companies from "./Components/companies/Companies";
import Residencies from "./Components/Resiencies/Residencies";
import Value from "./Components/value/Value";

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
      </div>
    </div>
  );
}

export default App;
