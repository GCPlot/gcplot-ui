'use strict';

import React from 'react';

class Chat extends React.Component {
  render() {
    return (
      <div className="direct-chat-messages">
        <div className="direct-chat-msg">
          <div className="direct-chat-info clearfix">
            <span className="direct-chat-name pull-left">John Doe</span>
            <span className="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
          </div>
          <img className="direct-chat-img" src="img/user1-128x128.jpg" alt="message user image" />
          <div className="direct-chat-text">
            Is this template really for free? That's unbelievable!
          </div>
        </div>
        <div className="direct-chat-msg right">
          <div className="direct-chat-info clearfix">
            <span className="direct-chat-name pull-right">Sarah Bullock</span>
            <span className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
          </div>
          <img className="direct-chat-img" src="img/user3-128x128.jpg" alt="message user image" />
          <div className="direct-chat-text">
            You better believe it!
          </div>
        </div>
        <div className="direct-chat-msg">
          <div className="direct-chat-info clearfix">
            <span className="direct-chat-name pull-left">John Doe</span>
            <span className="direct-chat-timestamp pull-right">23 Jan 5:37 pm</span>
          </div>
          <img className="direct-chat-img" src="img/user1-128x128.jpg" alt="message user image" />
          <div className="direct-chat-text">
            Do you want to join us?
          </div>
        </div>
        <div className="direct-chat-msg right">
          <div className="direct-chat-info clearfix">
            <span className="direct-chat-name pull-right">Sarah Bullock</span>
            <span className="direct-chat-timestamp pull-left">23 Jan 6:10 pm</span>
          </div>
          <img className="direct-chat-img" src="img/user3-128x128.jpg" alt="message user image" />
          <div className="direct-chat-text">
            I would love to.
          </div>
        </div>
      </div>
    );
  }
}

Chat.displayName = 'Chats';
Chat.defaultProps = {
};
Chat.propTypes = {
};

export default Chat;
