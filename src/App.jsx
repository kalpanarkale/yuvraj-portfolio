import Header from './components/Header';
// import Introduction from './components/Introduction';
import Projects from './components/Projects';
// import CardSlider from "./components/CardSlider";
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <Introduction /> */}
        <Projects />
        {/* <CardSlider /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;