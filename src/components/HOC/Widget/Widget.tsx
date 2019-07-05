import React, {useState, useEffect} from 'react';
import {WidgetProps} from './Widget';

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
export interface WidgetState {
  active: boolean;
}
const initState = {
  active: true
};
export default function Widget(props: WidgetProps) {
  const [state, setstate] = useState(initState);
  const {title, footerText, children} = props;
  const {active} = state;
  const widgetClassName = classNames('widget', {active: active});

  useEffect(() => {
    if (props && props.active !== undefined) setstate({active: props.active});
  }, [props]);

  const handleCloseWidget = () => {
    setstate((prevState) => {
      return {active: !prevState.active};
    });
  };
  return (
    <div className={widgetClassName}>
      <div className="widget-header">
        <div className="widget-button">
          <img src={eventsIcon} alt="" />
        </div>
        <div className="widget-title">
          <p>{title}</p>
        </div>
        <div className="widget-button" onClick={handleCloseWidget}>
          <img src={cancelIcon} alt="close" />
        </div>
      </div>

      <div className="widget-body">{children}</div>
      <div className="widget-footer">
        <div className="footer-text">
          <p>{footerText}</p>
        </div>
        <div className="widget-button">
          <img src={openIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
