import * as React from 'react';

import cancelIcon from '../../assets/images/cancel.svg';

interface TelephoneBookProps {}

const TelephoneBook: React.FunctionComponent<TelephoneBookProps> = (props) => {
  return (
    <div className="telephone-book">
      <p className="title">Telefoonboek</p>
      <p className="description">
        Vind collega’s op naam, trefwoord, functie, etc.
      </p>
      <div className="input-container">
        <input type="text" />

        <img src={cancelIcon} alt="" className="icon" />
      </div>
    </div>
  );
};

export default TelephoneBook;
