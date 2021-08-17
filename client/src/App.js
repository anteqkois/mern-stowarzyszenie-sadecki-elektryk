import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { WidthDeviceProvider, WidthThemeProvider } from './context/Context';
import * as projectsAPI from './helpers/projectsAPI';

import Layout from './layouts/Layout';
import Navigation from './containers/Navigation';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import Projects from './pages/Projects';
import Aid from './containers/Aid';
import Login from './containers/Login';
import Logout from './containers/Logout';
import Fotter from './containers/Fotter';
import ScrollToTop from './components/utils/ScrollToTop';

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

function App() {
  //TESTOWANIE USEERROR

  // useEffect(() => {
  //   (async () => {
  //     await projectsAPI
  //       .error()
  //       .then(({data}) => {
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.log(error.response);
  //       });
  //     // console.log(data);
  //     // const { data } = await projectsAPI.error();
  //     // console.log(data);
  //   })();
  // }, []);

  return (
    <WidthDeviceProvider>
    <WidthThemeProvider>
      <Router>
        <Layout>
          <ScrollToTop />
          <Switch>
            <PrivateRoute path="/admin" component={AdminPanel} />
            <>
              <Navigation />
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/aid" component={Aid} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <Fotter />
            </>
          </Switch>
        </Layout>
      </Router>
    </WidthThemeProvider>
    </WidthDeviceProvider>
  );
}

export default App;
