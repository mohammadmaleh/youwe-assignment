import classnames from 'classnames';
import * as React from 'react';

import logo from '../../assets/images/CuraNu-logo.svg';

interface ActivityIndicatorProps {
  size: string;
}

const ActivityIndicator: React.FunctionComponent<ActivityIndicatorProps> = (
  props
) => {
  const {size} = props;
  const indicatorStyle = classnames('activity-indicator', {
    small: size === 'small',
    mid: size === 'mid',
    big: size === 'big'
  });
  return (
    <div className={indicatorStyle}>
      <img src={logo} alt="" />
    </div>
  );
};

export default ActivityIndicator;
