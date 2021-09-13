import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Navi from "./Layouts/Navi";
import Dashboard from "./Layouts/Dashboard";
import "./index.css";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
        <Dashboard/>
      </Container><br/>
      <Footer/>
    </div>
  );
}

export default App;
