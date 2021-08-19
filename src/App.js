import './App.css';
import 'semantic-ui-css/semantic.min.css'
import EmployerList from './Pages/User/Employer/EmployerList';
import { Container } from 'semantic-ui-react';
import JobAdvertList from './Pages/JobAdvert/JobAdvertList';
import UserList from './Pages/User/UserList';
import JobSeekerList from './Pages/User/Jobseeker/JobSeekerList';
import JobPositionList from './Pages/JobAdvert/JobPosition/JobPositionList';
import Navi from './Layouts/Navi';
import Dashboard from './Layouts/Dashboard';
import HomePage from './Pages/HomePage/HomePage';
import './index.css';

function App() {



  return (
    <div className="bodye">
    <div className="App"  >
      <Container>
        <Navi />
      </Container>
      <Container className="main">
        <Dashboard />
      </Container>
      </div>
    </div>
  );
}

export default App;
