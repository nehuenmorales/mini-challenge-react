import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home';
import Form from './components/Form';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <Route path={"/"} component={NavBar}/>
    <Route exact path={"/"} component={Home}/>
    <Route exact path={"/form"} component={Form}/>
    </>
  );
}

export default App;
