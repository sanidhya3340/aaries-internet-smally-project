// import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//import pages
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import IndividualPage from "./pages/IndividualPage";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/performers">
          <LandingPage />
        </Route>
        <Route exact path="/individual">
          <IndividualPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
