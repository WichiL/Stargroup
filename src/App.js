import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/navbar';
import employee from './components/employee/employee'
import area from './components/area/area'
import home from './components/home'

function App() {

  return (

    <BrowserRouter>
      <div className="container mt-5">
        <Navbar/> 
        <Switch>
          <div className="App">
            <Route path='/' component={home} exact/>
            <Route path='/employees' component={employee} exact/>
            <Route path='/areas' component={area} exact/>
          </div>
        </Switch>
      </div>

    </BrowserRouter>
  
  );
}

export default App;
