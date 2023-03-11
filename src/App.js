import {Switch, Route} from 'react-router-dom'

import MasterPage from './components/MasterPage'
import StudentPage from './components/StudentPage'
import MasterLoginPage from './components/MasterLoginPage'
import StudentLoginPage from './components/StudentLoginPage'
import LoginPage from './components/LoginPage'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/master_page" component={MasterPage} />
    <Route exact path="/student_page" component={StudentPage} />
    <Route exact path="/masters_login_page" component={MasterLoginPage} />
    <Route exact path="/students_login_page" component={StudentLoginPage} />
    <Route exact path="/login_page" component={LoginPage} />
  </Switch>
)

export default App
