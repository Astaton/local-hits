import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./css/App.css";
import { Theatre, SeriesMenu, MainMenu, NavBar } from "./Components";

const App: React.FC = () => {
  // const content: Array<String> = [];

  return (
    <Router>
      <main className="mainContainer">
        <NavBar />
        <Switch>
          <Route exact path={"/"} component={MainMenu} />
          <Route path={"/series"} render={() => <SeriesMenu />} />
          <Route path={"/theatre"} component={Theatre} />
        </Switch>
      </main>
    </Router>
  );
};

// <div className="App">
//   <h2 className="header">This is the tsx version?</h2>
//   <Theatre />
// </div>

export default App;
