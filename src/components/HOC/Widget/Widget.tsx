import React, {useState, useEffect} from 'react';
import {WidgetProps} from './Widget';
import {ClickableIcon} from '../../index';
import cancelIcon from '../../../assets/images/cancel.svg';
import eventsIcon from '../../../assets/images/calendar.png';
import openIcon from '../../../assets/images/open.png';
import './Widget.scss';
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
