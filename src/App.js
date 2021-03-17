import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Todo from "./todo";
import Contact from "./contact";
import AboutUs from "./aboutus";

function Home() {
  return(
      <h1>This is the home page</h1>
  )
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className={'w-full'}>
            <li className={'inline-block w-1/3 text-center p-5 bg-blue-500 text-white'}>
              <NavLink to="/" activeClassName="font-bold" exact={true}>Todo</NavLink>
            </li>
            <li className={'inline-block w-1/3 text-center border-r border-blue-800 border-l p-5 bg-blue-500 text-white'}>
              <NavLink to="/contact" activeClassName="font-bold" exact={true}>Contact Us</NavLink>
            </li>
            <li className={'inline-block w-1/3 text-center p-5 bg-blue-500 text-white'}>
              <NavLink to="/aboutus" activeClassName="font-bold" exact={true}>About Us</NavLink>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route path="/">
            <Todo />
          </Route>
        </Switch>
      </div>


    </Router>
  );
}

export default App;
