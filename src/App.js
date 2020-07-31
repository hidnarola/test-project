import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute';
// import Home from './Containers/Home/Home';
// import Movies from './Containers/Movies/Movies';
// import WebSeries from './Containers/Series/WebSeries';

const Home = lazy(() => import('./Containers/Home/Home'));
const Movies = lazy(() => import('./Containers/Movies/Movies'));
const WebSeries = lazy(() => import('./Containers/Series/WebSeries'));

function App() {
  return (
    <div className="App">
      <Suspense fallback=''>
        <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute path="/movies" component={Movies} />
          <PublicRoute path="/series" component={WebSeries} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
