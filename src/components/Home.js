import React, {Component, PropTypes} from 'react';
import Actions from './Actions';

// TODO i18n
class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="row middle-xs center-xs top orange-gradient">
          <div className="col-xs-12">
            <h1>MyOpenWebNet</h1>
          </div>
          <div className="col-xs-10">
            <h2>OpenWebNet is the protocol developed by BTicino that let you manage your home automation system remotely</h2>
          </div>
        </div>
        <Actions />
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
