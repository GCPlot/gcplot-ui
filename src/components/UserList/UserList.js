'use strict';

import React from 'react';

class UserList extends React.Component {
  render() {
    return (
      <ul className="registered-users-list clearfix">
          <li>
              <a href="#"><img src="img/user-5.jpg" alt="" /></a>
              <h4 className="username text-ellipsis">
                  Savory Posh
                  <small>Algerian</small>
              </h4>
          </li>
          <li>
              <a href="#"><img src="img/user-3.jpg" alt="" /></a>
              <h4 className="username text-ellipsis">
                  Ancient Caviar
                  <small>Korean</small>
              </h4>
          </li>
          <li>
              <a href="#"><img src="img/user-1.jpg" alt="" /></a>
              <h4 className="username text-ellipsis">
                  Marble Lungs
                  <small>Indian</small>
              </h4>
          </li>
          <li>
              <a href="#"><img src="img/user-8.jpg" alt="" /></a>
              <h4 className="username text-ellipsis">
                  Blank Bloke
                  <small>Japanese</small>
              </h4>
          </li>
          <li>
              <a href="#"><img src="img/user-2.jpg" alt="" /></a>
              <h4 className="username text-ellipsis">
                  Hip Sculling
                  <small>Cuban</small>
              </h4>
          </li>
          <li>
              <a href="#"><img src="img/user-6.jpg" alt="" /></a>
              <h4 className="username text-ellipsis">
                  Flat Moon
                  <small>Nepalese</small>
              </h4>
          </li>
          <li>
              <a href="#"><img src="img/user-4.jpg" alt="" /></a>
              <h4 className="username text-ellipsis">
                  Packed Puffs
                  <small>Malaysian></small>
              </h4>
          </li>
          <li>
              <a href="#"><img src="img/user-9.jpg" alt="" /></a>
              <h4 className="username text-ellipsis">
                  Clay Hike
                  <small>Swedish</small>
              </h4>
          </li>
      </ul>
    );
  }
}

UserList.displayName = 'UserLists';
UserList.defaultProps = {
};
UserList.propTypes = {
};

export default UserList;
