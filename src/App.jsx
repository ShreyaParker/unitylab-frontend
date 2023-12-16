import {BrowserRouter as Router , Route,Routes} from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home/>} />
            <Route path={"/details/:objectID"} element={<Details/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
