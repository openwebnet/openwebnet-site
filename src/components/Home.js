import React, {Component, PropTypes} from 'react';

import RaisedButton from 'material-ui/lib/raised-button';

// TODO i18n
class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="row middle-xs center-xs top orange-gradient">
          <div className="col-xs-12">
            <h1>OpenWebNet</h1>
          </div>
          <div className="col-xs-10">
            <h2>OpenWebNet is the protocol developed by BTicino that let you manage your house from remote</h2>
          </div>
        </div>
        <div className="row center-xs actions">
          <div className="col-sm-2">
            <RaisedButton
              label="google play"
              primary={true}
              fullWidth={true}/>
          </div>
          <div className="col-sm-2">
            <RaisedButton
              label="github"
              primary={true}
              fullWidth={true}/>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;

