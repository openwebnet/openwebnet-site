import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import AppBar from 'material-ui/lib/app-bar';

import {Home} from '../components';
import CustomTheme from '../theme/CustomTheme';

injectTapEventPlugin();

export default class App extends Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(CustomTheme)
    };
  }

  render() {
    return (
      <div className="app-container">
        <AppBar />
        <Home />
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

App.propTypes = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
