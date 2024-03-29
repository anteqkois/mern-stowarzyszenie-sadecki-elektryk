import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { WidthDeviceProvider} from './context/WidthDeviceContext';
import { ThemeProvider} from './context/ThemeContext';
import { ErrorProvider} from './hooks/useError';

import Layout from './layouts/Layout';
import Navigation from './containers/Home/Navigation';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import Projects from './pages/Projects';
import Aid from './containers/Home/Aid';
import Login from './containers/Admin/Login';
import Logout from './containers/Admin/Logout';
import Fotter from './containers/Home/Fotter';
import ScrollToTop from './components/utils/ScrollToTop';
import NotFound from './components/utils/NotFound';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem('isLogined') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
        //<Redirect to="/login" {...props} from={props.location}/>
      )
    }
  />
);

const homePaths = ['', 'projects', 'aid', 'login', 'logout'];

function App() {
  return (
    <WidthDeviceProvider>
      <ThemeProvider>
        <ErrorProvider>
        <Router>
          <Layout>
            <ScrollToTop />
            <Switch>
              <PrivateRoute path="/admin" component={AdminPanel} />
              <Route exact path={`/(${homePaths.join('|')})`}>
                <Navigation />
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/aid" component={Aid} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Fotter />
              </Route>
              <Route path="*" component={NotFound} />
            </Switch>
          </Layout>
        </Router>
        </ErrorProvider>
      </ThemeProvider>
    </WidthDeviceProvider>
  );
}

export default App;
