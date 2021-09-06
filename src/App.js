import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Navi from "./Layouts/Navi";
import Dashboard from "./Layouts/Dashboard";
import "./index.css";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Container>
        <Navi />
      </Container>
      <Container className="main">
        <Dashboard />
      </Container>
      <footer>

      </footer>
    </div>
  );
}

export default App;
