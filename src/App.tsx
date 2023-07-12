import './App.css';
import Home from './pages';

function App() {
  return (
    <>
      <video autoPlay muted loop id="background">
        <source src="bg.mp4" type="video/mp4"></source>
      </video>

      <div className="bg">
        <div className="topBar">topbar</div>
        <div className="view">
          <Home />
        </div>
        <div className="navBar">
          <span className="homeBtn" />
        </div>
      </div>
    </>
  );
}

export default App;
