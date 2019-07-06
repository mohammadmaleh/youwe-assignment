import React, {useState, useEffect} from 'react';
import {ClickableIcon} from '..';
import cancelIcon from '../../assets/images/cancel.svg';
import classnames from 'classnames';
interface AccordionProps {
  title: string;
  content: string;
  active?: boolean;
}

const Accordion: React.FunctionComponent<AccordionProps> = (props) => {
  const {title, content} = props;
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (props && props.active !== undefined) setActive(props.active);
  }, [props, props.active]);
  const accordionClass = classnames('accordion', {active});

  return (
    <div className={accordionClass}>
      <div className="accordion-header" onClick={() => setActive(!active)}>
        <div className="title-container">
          <h3 className="title">{title}</h3>
        </div>
        <ClickableIcon icon={cancelIcon} />
      </div>
      <div className="accordion-body">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
