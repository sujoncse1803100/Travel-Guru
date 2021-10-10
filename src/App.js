import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from './components/Login/Login';
import Book from './components/Book/Book';



function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/booking">
            <Book />
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
