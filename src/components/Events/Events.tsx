import * as React from 'react';
import {Widget, ActivityIndicator} from '../index';
import cancelIcon from '../../assets/images/cancel.svg';
import {EventType} from '../../types/dashboard.types';

interface EventsProps {
  events: EventType[] | undefined;
}

const Events: React.FunctionComponent<EventsProps> = (props) => {
  const {events} = props;

  if (!events || events === null) return <ActivityIndicator size="smale" />;
  console.log(events);
  // const renderEvents = () => {
  //   if (!props.events) return false;
  //   return props.events.map((event: EventType) => (
  //     <div className="event">
  //       <p>{event.name}</p>
  //       <p>{event.date}</p>
  //     </div>
  //   ));
  // };
  return (
    <Widget icon={cancelIcon} title="Evenementen" active footerText="dsdsadsa">
      <ActivityIndicator size="mid" />
      {/* {props.events && props.events.length > 0 && <ul>{renderEvents()}</ul>} */}
    </Widget>
  );
};

export default Events;
