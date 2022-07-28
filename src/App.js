
import './App.css';
import Footer from './Comon/Footer/Footer';
import Navigation from './Comon/Navbar/Navigation';

import About from './Components/About/About';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div className="">
     <Navigation></Navigation>
     <Banner></Banner>
     <About></About>
     <Footer></Footer>
    </div>
  );
}

export default App;
