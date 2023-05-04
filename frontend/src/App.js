
import logo from './logo.svg';

import Admin from './pages/Admin';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">

      <Admin/>

      <Navbar />
      <Home />

    </div>
  );
}

export default App;
