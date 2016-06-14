import React, {Component, PropTypes} from 'react';
import Snackbar from 'material-ui/lib/Snackbar';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

class CookiePolicy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    const message = (
      <span>
        This website uses cookies to improve user experience.
        Browsing this website you consent to all cookies in accordance with
        our <span className="cookie-link" onClick={this.handleOpen}>Cookie Policy</span>.
      </span>
    );
    return (
      <div>
        <Snackbar
          className="cookie-policy"
          open={true && !this.state.open}
          message={message}
        />
        <Dialog
          bodyClassName="cookie-dialog"
          title="Cookie Policy"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          <p>
            A cookie is a very small text file that is stored on your computer when you visit some websites.
            It helps the website to remember information about your visit, like your preferred language and other settings
            that can make the site more useful to you. Cookies play an important role: without them, using the web would
            be a much more frustrating experience.
          </p>
          <p>
            This website uses only analytics and relies on external services (third-party).
            The analytics cookies help website owners to understand how their visitors engage with the entire website.
            Analytics service uses a set of cookies to collect information and report website usage statistics without
            personally identifying individual visitors.
            Further information on privacy policies and the use of these types of cookies can be found directly on the
            websites of the organizations that create and manage them.
          </p>
          <p>
            See the <a href="https://support.google.com/analytics/topic/2919631">Google Analytics Privacy Policy</a> and
            the general <a href="http://privacy.google.com">Google Privacy Policy</a> for further information.
          </p>
        </Dialog>
      </div>
    );
  }
}

CookiePolicy.propTypes = {};

export default CookiePolicy;
