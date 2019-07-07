import * as React from 'react';

import { Widget } from '../';
import cancelIcon from '../../assets/images/cancel.svg';
import { UserLinksType } from '../../types/dashboard.types';

interface UsersLinksProps {
  userLinks: UserLinksType;
}

const UsersLinks: React.FunctionComponent<UsersLinksProps> = (props) => {
  const renderUsersLinks = () => {
    const {userLinks} = props;
    return userLinks.map((link) => (
      <div className="user-link-item widget-item">
        <p className="user-link">{link}</p>
      </div>
    ));
  };
  return (
    <div className="users-links">
      <Widget footerText="dsdsad" title="Mijn links" icon={cancelIcon}>
        <ul>{renderUsersLinks()}</ul>
      </Widget>
    </div>
  );
};

export default UsersLinks;
