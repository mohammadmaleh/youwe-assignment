import * as React from 'react';
import classnames from 'classnames';
interface ClickableIconProps {
  icon: string;
  handleClick?: Function;
}

const ClickableIcon: React.FunctionComponent<ClickableIconProps> = (props) => {
  const {icon} = props;
  const handleClick = props.handleClick ? props.handleClick : () => {};
  const clickableIconClass = classnames('clickable-icon', {
    clickable: props.handleClick
  });
  return (
    <div className={clickableIconClass} onClick={() => handleClick()}>
      <img src={icon} alt="close" />
    </div>
  );
};

export default ClickableIcon;
