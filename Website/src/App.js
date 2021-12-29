import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search.js"
import Er from "./pages/404";
import Play from './pages/Player'
import Mashup from './pages/Mashup'
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [valu, setVal] = useState('')
  const [audio, setAudio] = useState('')
  const [s1, sets1] = useState('')
  const [s2, sets2] = useState('')
  return (
    <Router>
      <div className="App">
        <Navbar setVal={setVal} audio={audio}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search valu={valu} setAudio={setAudio}/>
          </Route>
          <Route exact path="/play/:name">
            <Play setAudio={setAudio} songs={[s1, s2]} setsongs={[sets1, sets2]}/>
          </Route>
          <Route exact path="/mashup">
            <Mashup songs={[s1, s2]} setsongs={[sets1, sets2]} />
          </Route>
          <Er />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
