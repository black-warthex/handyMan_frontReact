import './App.css';
import { ReportForm } from './components/form/ReportForm';
import HoursReport from './components/HoursReport/HoursReport';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return ( 
    <Router>
      
      <div className="content">
        <ul>
          <li><h2>Handy Man</h2></li>
          <li><Link to="/reportForm">add report</Link></li>
          <li><Link to="/HoursReport">find hours</Link></li>
        </ul>
      
      
      <Switch>
        <Route path="/reportForm" exact>
          <ReportForm/>
        </Route>
        <Route path="/HoursReport" exact>
          <HoursReport/>
        </Route>
      </Switch>
      </div>
    </Router>
    
   
  );
}

export default App;
