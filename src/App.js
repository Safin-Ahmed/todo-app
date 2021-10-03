import logo from './logo.svg';
import './App.css';
import SideBarNav from './components/SideBarNav/SideBarNav';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <SideBarNav></SideBarNav>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
