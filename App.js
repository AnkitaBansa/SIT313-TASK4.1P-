import './App.css';
import Header from './Header';
import Cardlist from './CardList';
import Tutoriallist from './Tutoriallist';
import Footer from './Footer';
import Signup from './Signup';

function App() {
  return (
    <div>
      <Header />

      <div className="deakin1">
      <div className='deakin'>
        <img src="./img/deakin.avif" alt="deakin" className='logo' />
      </div>
      </div>
      <div className='middle'>
        <h1>Featured Articles</h1>
      </div>
      <Cardlist />
      <div className='middle'>
      <h1>Featured Tutorials</h1>
      </div>
      <Tutoriallist />
      <Signup />
      <Footer />


    </div>
  );
}

export default App;

