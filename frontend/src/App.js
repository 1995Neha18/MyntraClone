import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from './components/AllRoutes';
import Footer from "./components/Footer";
// import Mens from './pages/mProduct/Mens';
// import Admin from "./pages/Admin";




function App() {
  return (
    <div className="App" >
      {/* <Admin/> */}
      <Navbar />
      <AllRoutes/>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
