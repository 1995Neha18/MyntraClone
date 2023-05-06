import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      {/* <Admin/> */}
      <Navbar />
   
      <Home />
      <Footer />
    </div>
  );
}

export default App;
