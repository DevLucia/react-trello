import React, { Component } from 'react';
import Header from './components/misc/Header';
import Board from './components/Board';
import { Switch, Route, Redirect} from 'react-router-dom';
import CardForm from './components/CardForm';
import Login from './components/auth/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ Board }/>
          <Route exact path="/new-card" component={ CardForm }/>
          <Route exact path="/login" component={ Login }/>
        </Switch>
      </div>
    );
  }
}

export default App;
