import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home';
import Form from './components/Form';

function App() {
  return (
    <>
    <Route exact path={"/"} component={Home}/>
    <Route exact path={"/form"} component={Form}/>
    </>
  );
}

export default App;
