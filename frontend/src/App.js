import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllRoutes from './components/AllRoutes';
import Footer from "./components/Footer";
import Mens from './pages/mProduct/Mens';
import SingleProductPage from "./pages/SingleProductPage";
// import Admin from "./pages/Admin";



function App() {
  return (
    <div className="App" onReset={true}>
      {/* <Admin /> */}
      {/* <Navbar /> */}
      {/* <AllRoutes/> */}
      {/* <Home /> */}
      {/* <Mens /> */}
     
     <SingleProductPage />

      {/* <Footer /> */}

    </div>
  );
}

export default App;
