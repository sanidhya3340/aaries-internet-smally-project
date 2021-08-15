// import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import pages
import Home from './pages/Home'




function App() {
  return (
    <Router>
      

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
