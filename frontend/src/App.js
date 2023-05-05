
import logo from './logo.svg';

import Admin from './pages/Admin';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllRoutes from './components/AllRoutes';


function App() {
  return (
    <div className="App">
      {/* <Admin/> */}
      <Navbar />
      <AllRoutes/>
      {/* <Home /> */}
    </div>
  );
}

export default App;
