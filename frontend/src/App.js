import "./App.css";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" onReset={true}>
      {/* <Admin/> */}
      <Navbar />
      <AllRoutes />
      {/* <Mens /> */}
      <Footer />
    </div>
  );
}

export default App;
