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
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";


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
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/privacy">
          <PrivacyPolicyPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
