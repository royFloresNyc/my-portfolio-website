import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <>
        <Navigation/>
        <Switch>
            <Route path='/about' component={About}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/' component={Home}/>
        </Switch>
    </>
  );
}

export default App;
