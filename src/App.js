import "./App.css";
// IMPORT default export
import NavbarC from "./Components/Navbar/Navbar";
// import named export :{}
import Cards from "./Components/Cards/Cards";
// import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <NavbarC />
      <Cards />
    </div>
  );
}

export default App;
