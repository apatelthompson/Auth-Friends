import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import FriendData from "./components/FriendData";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link className="login" to="/login">
            Login to MyFriends
          </Link>
        </div>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/frienddata" component={FriendData} />
      </div>
    </Router>
  );
}

export default App;
