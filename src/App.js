import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button } from "@material-ui/core";
// import { Button } from "./components/Button/Button";
import MyButton from "./components/Button/MyButton";
// pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Product from "./pages/Product";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Services" component={Services} />
          <Route path="/Product" component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
