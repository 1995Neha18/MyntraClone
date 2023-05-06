import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllRoutes from './components/AllRoutes';
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      {/* <Admin/> */}
      <Navbar />
      <AllRoutes/>
      <Home />
      <Footer />

    </div>
  );
}

export default App;
