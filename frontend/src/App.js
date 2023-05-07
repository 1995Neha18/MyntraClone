import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllRoutes from './components/AllRoutes';
import Footer from "./components/Footer";
import Mens from './pages/mProduct/Mens';
import Admin from "./pages/Admin";
import Womens from "./pages/wProducts/Womens";


function App() {
  return (
    <div className="App" onReset={true}>
      <Navbar />
      <AllRoutes/>
      <Footer /> 
    </div>
  );
}

export default App;
