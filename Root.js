import App from './App'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/login'
import Search from './components/search'
import React from 'react'
import {Provider} from 'react-redux'
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  </Provider>
)

export default Root;