import './Widget.scss';

import React, {useEffect, useState} from 'react';

import {ClickableIcon} from '../..';
import eventsIcon from '../../../assets/images/calendar.png';
import cancelIcon from '../../../assets/images/cancel.svg';
import openIcon from '../../../assets/images/open.png';
import arrowIcon from '../../../assets/images/arrow-right.svg';

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

  return (
    <div className={widgetClassName}>
      <div className="widget-header">
        <ClickableIcon icon={eventsIcon} />

        <div className="widget-title" onClick={(e) => setActive(!active)}>
          <p>{title}</p>
          <img src={arrowIcon} alt="" />
        </div>

        <ClickableIcon icon={cancelIcon} />
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
