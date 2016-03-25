import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Home} from '../components';

injectTapEventPlugin();

export default class App extends Component {
  render() {
    return <Home />;
  }
}

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
