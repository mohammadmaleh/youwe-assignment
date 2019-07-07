import './Widget.scss';

import React, { useEffect, useState } from 'react';

import { ClickableIcon } from '../..';
import eventsIcon from '../../../assets/images/calendar.png';
import cancelIcon from '../../../assets/images/cancel.svg';
import openIcon from '../../../assets/images/open.png';

var classNames = require('classnames');

export interface WidgetProps {
  active?: boolean;
  icon: any;
  title: string;
  footerText: string;
  children: any;
}

export default function Widget(props: WidgetProps) {
  const [active, setActive] = useState<boolean>(true);
  const {title, footerText, children} = props;
  const widgetClassName = classNames('widget', {active: active});
  useEffect(() => {
    if (props && props.active !== undefined) setActive(props.active);
  }, [props, props.active]);
  console.log(children);

  return (
    <div className={widgetClassName}>
      <div className="widget-header">
        <ClickableIcon icon={eventsIcon} />

        <div className="widget-title">
          <p>{title}</p>
        </div>

        <ClickableIcon
          icon={cancelIcon}
          handleClick={() => setActive(!active)}
        />
      </div>

      <div className="widget-body">{children}</div>
      <div className="widget-footer">
        <div className="footer-text">
          <p>{footerText}</p>
        </div>
        <ClickableIcon icon={openIcon} />
      </div>
    </div>
  );
}
