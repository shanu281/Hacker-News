import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Card from "./Components/Card";
import Footer from "./Components/Footer"
function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <div className="hero-sec">
      <Card />
<Footer />
      </div>
    </div>
  );
}

export default App;
