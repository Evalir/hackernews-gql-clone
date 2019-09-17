import React from 'react';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../styles/App.css';

function App() {
  return (
    <>
      <div className="center w85">
        <BrowserRouter>
          <Header />
          <div className="ph3 pv1 background-gray">
            <Switch>
              <Route exact path="/" component={LinkList} />
              <Route exact path="/create" component={CreateLink} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
