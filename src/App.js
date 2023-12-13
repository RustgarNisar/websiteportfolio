import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Router from "./layout/Router";


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Router />
  </BrowserRouter>
  );
}

export default App;
