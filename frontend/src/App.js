import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllRoutes from './components/AllRoutes';
import Footer from "./components/Footer";
import Cart from "./components/cart/Cart";
// import Mens from './pages/mProduct/Mens';
// import Admin from "./pages/Admin";



function App() {
  return (
    <div className="App" >
      {/* <Admin/> */}
      {/* <Navbar />
      <AllRoutes/>
      <Home />
      <Footer /> */}
      <Cart />

    </div>
  );
}

export default App;
