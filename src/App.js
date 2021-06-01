import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Blog from './container/Blog';
import BlogDetail from './components/BlogDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route path="/:id" component={BlogDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
