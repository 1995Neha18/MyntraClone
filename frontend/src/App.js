
import logo from './logo.svg';

import Admin from './pages/Admin';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Mens from './pages/mProduct/Mens';


function App() {
  return (
    <div className="App" onReset={true}>
      <Admin/>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
