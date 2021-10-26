import React from "react"
import Homepage from "./pages/homeage";
import {Route,Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/login";
import "./App.css"
import Navbar1 from "./pages/navbar";
import Slider from "./components/slider";
import Twpage from "./pages/twpage";
import Venky from "./components/venky";
import Ram from "./components/ram";
import Prabhas from "./components/prabhas";
import Cherry from "./components/cherry";
import Pavan from "./components/pavan";
import Mahesh from "./components/mahesh";
import Ntr from "./components/ntr";
import Arjun from "./components/arjun";
import Bwpage from "./pages/bwpage";
function App() {
  return (
    <div className="App">
   <Navbar1/>
  
    <Switch>
  <Route  exact path="/login">
   <Login/>
  </Route>
  <Route  exact path="/signup">
   <Twpage/>
  </Route>
  <Route  exact path="/venky">
   <Venky/>
  </Route>
  <Route  exact path="/ram">
   <Ram/>
  </Route>
  <Route  exact path="/prabhas">
   <Prabhas/>
  </Route>
  <Route  exact path="/cherry">
   <Cherry/>
  </Route>
  <Route  exact path="/twpage">
   <Twpage/>
  </Route>
  <Route  exact path="/bwpage">
   <Bwpage/>
  </Route>
  <Route  exact path="/pavan">
   <Pavan/>
  </Route>
  <Route  exact path="/mahesh">
   <Mahesh/>
  </Route>
  <Route  exact path="/ntr">
   <Ntr/>
  </Route>
  <Route  exact path="/arjun">
   <Arjun/>
  </Route>
  <Route  exact path="/">
   <Homepage/>
  </Route>
    </Switch>
    </div>
  );
}
export default App;
