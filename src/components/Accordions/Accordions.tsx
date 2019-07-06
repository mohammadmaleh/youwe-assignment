import * as React from 'react';
import {Accordion} from '../index';
interface AccordionsProps {}

const Accordions: React.FunctionComponent<AccordionsProps> = (props) => {
  return (
    <div className="accordions">
      <Accordion title={'sssss'} content={'dddddd'} />
      <Accordion title={'sssss'} content={'dddddd'} />
      <Accordion title={'sssss'} content={'dddddd'} />
      <Accordion title={'sssss'} content={'dddddd'} />
    </div>
  );
};

export default Accordions;
