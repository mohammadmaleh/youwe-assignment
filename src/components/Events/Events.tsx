import { format } from 'date-fns';
import * as React from 'react';

import { ActivityIndicator, Widget } from '..';
import cancelIcon from '../../assets/images/cancel.svg';
import { EventType } from '../../types/dashboard.types';

interface EventsProps {
  events: EventType[] | null;
}

const Events: React.FunctionComponent<EventsProps> = (props) => {
  const {events} = props;
  if (!events || events === null) return <ActivityIndicator size="mid" />;
  const renderEvents = () => {
    if (!props.events) return false;
    return props.events.map((event: EventType) => (
      <div className="event widget-item" key={event.id}>
        <p>{event.name}</p>
        <p>{format(event.date, 'DD/MM/YYYY')}</p>
      </div>
    ));
  };
  return (
    <Widget icon={cancelIcon} title="Evenementen" active footerText="dsdsadsa">
      {props.events && props.events.length > 0 && (
        <ul className="events">{renderEvents()}</ul>
      )}
    </Widget>
  );
};

export default Events;
