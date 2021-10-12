import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from './components/Login/Login';
import CreateAccount from './components/CreateAcount/CreateAccount';
import { createContext, useState } from 'react';
import Booking from './components/Booking/Booking';
import BookingStart from './components/Booking/BookingStart';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setloggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setloggedInUser]}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/account">
            <CreateAccount />
          </Route>
          <Route path="/booking/:id">
            <Booking />
          </Route>
          <Route path="/bookingstart/:id">
            <BookingStart />
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
