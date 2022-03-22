import { Link, Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import './App.css'



function App() {
  return (
    <>
      <Nav />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
