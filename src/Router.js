import React from 'react';
import { Router, Scene, Actions, Lightbox, Modal, Stack, Drawer } from 'react-native-router-flux';
import Home from './screens/Home';

const RouterComponent = () => {
    return (
      <Router>
          <Scene key="root" hideNavBar>
            <Scene key="main" initial hideNavBar>
                <Scene key="home" component={Home} />
            </Scene>
          </Scene>
      </Router>
    );
}

export default RouterComponent;