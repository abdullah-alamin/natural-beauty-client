import logo from './logo.svg';
import './App.css';
import CreateProject from './components/CreateProject';
import ShowProject from './components/ShowProject';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>salam</h1>
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createBeauty">Create Beauty</Link>
          </li>
          <li>
            <Link to="/allBeauties">All Beauties</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
          <ShowProject></ShowProject>
          </Route>
          <Route path="/createBeauty">
          <CreateProject></CreateProject>
          </Route>
          <Route path="/allBeauties">
          <ShowProject></ShowProject>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
