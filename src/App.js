import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import TouchTypingApp from './components/TouchTypingApp'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/touchtyping" component={TouchTypingApp} />
    <Route component={NotFound} />
  </Switch>
)

export default App
