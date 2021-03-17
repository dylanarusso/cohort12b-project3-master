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
              <NavLink to="/" activeClassName="font-bold" exact={true}>Home</NavLink>
            </li>
            <li className={'inline-block w-1/3 text-center border-r border-blue-800 border-l p-5 bg-blue-500 text-white'}>
              <NavLink to="/todos" activeClassName="font-bold" exact={true}>Todos</NavLink>
            </li>
            <li className={'inline-block w-1/3 text-center p-5 bg-blue-500 text-white'}>
              <NavLink to="/contact" activeClassName="font-bold" exact={true}>Contact</NavLink>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route path="/todos">
            <Todo />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>


    </Router>
  );
}

export default App;
