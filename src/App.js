// import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import pages
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'



function App() {
  return (
    <Router>
      

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/landing-page">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
