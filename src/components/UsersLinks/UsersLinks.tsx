import * as React from 'react';

import { ActivityIndicator, Widget } from '../';
import cancelIcon from '../../assets/images/cancel.svg';

interface UsersLinksProps {
  userLinks: string[] | null;
}

const UsersLinks: React.FunctionComponent<UsersLinksProps> = (props) => {
  const {userLinks} = props;
  if (!userLinks || userLinks === null) return <ActivityIndicator size="mid" />;

  const renderUsersLinks = () => {
    if (!userLinks) return false;
    return userLinks.map((link) => (
      <div className="user-link-item widget-item">
        <p className="user-link">{link}</p>
      </div>
    ));
  };
  return (
    <Widget footerText="dsdsad" title="Mijn links" icon={cancelIcon}>
      <div className="users-links">
        <ul className="user-links-container">{renderUsersLinks()}</ul>
      </div>
    </Widget>
  );
};

export default UsersLinks;
