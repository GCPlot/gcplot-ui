import React from 'react';

require('../styles/skeleton/custom.css');
require('../styles/skeleton/normalize.css');
require('../styles/skeleton/skeleton.css');

var Recaptcha = require('react-recaptcha');

var callback = function () {
  console.log('Done!!!!');
};

// specifying verify callback function
var verifyCallback = function (response) {
  console.log(response);
};

class WelcomeLayout extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        loginErrorStyle: {
          display: "none",
          color: 'red'
        }
      };
   }

  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="nine columns">
      <section className="header">
      <h1 className="title">
        <b>GC</b>Plot
      </h1>
        <h2 className="title">
          Universal JVM Garbage Collector Logs Analyser
        </h2>
        <h3>
          Made by developers for the developers
        </h3>
        <div className="value-props row">
          <div className="four columns value-prop">
            <img className="value-img" src="img/missile.png" width="100" height="200"/>
            Monitor how your Garbage Collector flies continuously - on the complex system or just a simple app.
          </div>
          <div className="four columns value-prop">
            <img className="value-img" src="img/reports.jpg" width="199" height="200"/>
            Decent amount of reports, charts and hints will help you to undertand all pitfalls in your GC configuration.
          </div>
          <div className="four columns value-prop">
            <img className="value-img" src="img/plug.png" width="200" height="200"/>
            Connect multiple JVMs in realtime or upload individual log files - all made easy for you.
          </div>
        </div>
      </section></div>
    <div className="three columns">
      <section className="header">
      <h2>Sign in</h2>
      <input className="u-full-width" type="email" placeholder="Username or email" id="loginEmailInput"/>
      <input className="u-full-width" type="password" placeholder="Password" id="loginPasswordInput"/>
      <p style={this.state.loginErrorStyle}>Incorrect login or password.</p>
      <input className="button-primary" type="submit" value="Login"/>
      <h2>Sign up</h2>
      <input className="u-full-width" type="text" placeholder="Username" id="usernameInput"/>
      <input className="u-full-width" type="text" placeholder="First Name" id="firstNameInput"/>
      <input className="u-full-width" type="text" placeholder="Last Name" id="lastNameInput"/>
      <input className="u-full-width" type="email" placeholder="Email" id="emailInput"/>
      <input className="u-full-width" type="password" placeholder="Password" id="passwordInput"/>
      <Recaptcha
          sitekey="6LcxXwgUAAAAAO7z8CIDSZmWg0kTf7vgzB1eei1F"
          render="explicit"
          verifyCallback={verifyCallback}
          onloadCallback={callback}
        />
      <input className="button-primary" type="submit" value="Submit"/>
      </section>
    </div>
  </div>
      </div>
    );
  }
}

WelcomeLayout.defaultProps = {
};

export default WelcomeLayout;
