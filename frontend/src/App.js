import "./App.css";
import Navbar from "./components/Navbar";


import AllRoutes from './components/AllRoutes';
import Footer from "./components/Footer";





function App() {
  return (
    <div className="App" onReset={true}>

      
      <Navbar />

      <AllRoutes />
      <Footer />
   
    </div>
  );
}

export default App;
