import * as React from 'react';

import { ActivityIndicator, Widget } from '..';
import cancelIcon from '../../assets/images/cancel.svg';
import { UserGroupType } from '../../types/dashboard.types';

interface UsersGroupsProps {
  userGroups: UserGroupType[] | null;
}

const UsersGroups: React.FunctionComponent<UsersGroupsProps> = (props) => {
  const {userGroups} = props;
  if (!userGroups || userGroups === null)
    return <ActivityIndicator size="mid" />;

  const renderUsersLinks = () => {
    if (!userGroups) return false;
    return userGroups.map((group: UserGroupType) => (
      <div className="user-group-item widget-item" key={group.id}>
        <img src={group.groupImage} className="group-image"></img>
        <p className="group-text">{group.name}</p>
      </div>
    ));
  };
  return (
    <Widget footerText="Meer groepen" title="Mijn groepen" icon={cancelIcon}>
      <div className="users-groups">
        <ul className="user-groups-container">{renderUsersLinks()}</ul>
      </div>
    </Widget>
  );
};

export default UsersGroups;
