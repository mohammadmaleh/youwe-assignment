import React, { useEffect, useState } from 'react';

import { Accordion } from '..';

interface AccordionsProps {
  openFirstAccordion: boolean;
  clickingAccordionEffectOthers: boolean;
}

const Accordions: React.FunctionComponent<AccordionsProps> = (props) => {
  const {clickingAccordionEffectOthers, openFirstAccordion} = props;
  const [activeAccordions, setActiveAccordion] = useState([
    {
      id: 0,
      active: openFirstAccordion,
      title: 'Accordion 1',
      content:
        'Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttito '
    },
    {
      id: 1,
      active: false,
      title: 'Accordion 2',
      content:
        'Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttito '
    },
    {
      id: 2,
      active: false,
      title: 'Accordion 3',
      content:
        'Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttito '
    }
  ]);
  useEffect(() => {
    if (props && props.openFirstAccordion) {
      console.log('here');
      setActiveAccordion((activeAccordions) => {
        let newActiveAccordion = [...activeAccordions];
        newActiveAccordion[0].active = true;
        return newActiveAccordion;
      });
    }
  }, [props]);
  const handleCloseAccordion = (id: number) => {
    setActiveAccordion(
      activeAccordions.map((accordion) => {
        if (clickingAccordionEffectOthers) {
          if (accordion.id === id) accordion.active = !accordion.active;
          else accordion.active = false;
        } else {
          if (accordion.id === id) accordion.active = !accordion.active;
        }

        return accordion;
      })
    );
  };
  const renderAccordions = () => {
    return activeAccordions.map((accordion) => (
      <Accordion
        key={accordion.id}
        id={accordion.id}
        closeOtherAccordions={handleCloseAccordion}
        active={accordion.active}
        title={accordion.title}
        content={accordion.content}
      />
    ));
  };
  return <div className="accordions">{renderAccordions()}</div>;
};

export default Accordions;
