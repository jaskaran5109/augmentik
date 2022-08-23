import './App.css';
import About from './Component/About/About';
import FirstPage from './Component/FirstPage/FirstPage';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import News from './Component/News/News';
import Project from './Component/Project/Project';
import Service from './Component/Service/Service';
import Testimonials from './Component/Testimonials/Testimonials';
import Works from './Component/Works/Works';

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstPage/>
      <Service/>
      <Works/>
      <About/>
      <Testimonials/>
      <News/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
