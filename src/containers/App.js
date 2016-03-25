import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="row center-xs">
          <div className="col-xs-4">OpenWebNet</div>
        </div>
      </div>
    );
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
