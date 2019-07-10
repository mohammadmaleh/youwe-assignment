import classnames from 'classnames';
import React from 'react';

import {ClickableIcon} from '..';
import arrowIcon from '../../assets/images/arrow-right.svg';

interface AccordionProps {
  title: string;
  content: string;
  active: boolean;
  closeOtherAccordions: Function;
  id: number;
}

const Accordion: React.FunctionComponent<AccordionProps> = (props) => {
  const {title, content, closeOtherAccordions, id, active} = props;

  const accordionClass = classnames('accordion', {active});
  const handleClickAccordionHeader = () => {
    closeOtherAccordions(id);
  };
  return (
    <div className={accordionClass}>
      <div className="accordion-header" onClick={handleClickAccordionHeader}>
        <div className="title-container">
          <h3 className="title">{title}</h3>
        </div>
        <ClickableIcon icon={arrowIcon} />
      </div>
      <div className="accordion-body">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
