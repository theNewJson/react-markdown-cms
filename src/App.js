import React from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import List from './articles'
import ArticleCreate from './articles/create'
import ArticleDetail from './articles/detail'

function App() {
  return (
    <div style={{ width: '80vw', margin: '10vh auto 10vh auto' }}>
      <Switch>
        <Route exact path='/articles' component={List} />
        <Route exact path='/articles/create' component={ArticleCreate} />
        <Route exact path='/articles/:id' component={ArticleDetail} />
      </Switch>
    </div>
  );
}

export default App;
