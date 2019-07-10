import * as React from 'react';
import { Link } from 'react-router-dom';

import { ClickableIcon } from '..';
import Logo from '../../assets/images/CuraNu-logo.png';
import notificationIcon from '../../assets/images/notification.svg';
import searchIcon from '../../assets/images/search-icon.svg';
import settingsIcon from '../../assets/images/settings.svg';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="header">
      <div className="menu-container">
        <div className="menu">
          <Link to="/contact-us" className="menu-item">
            Groepen Contact
          </Link>

          <a href="/" className="menu-item">
            FAQ
          </a>
          <a href="/" className="menu-item">
            Smoelenboek
          </a>
          <a href="/" className="menu-item">
            Microblog
          </a>
          <a href="/" className="menu-item">
            Over ons
          </a>
        </div>
        <ClickableIcon icon={settingsIcon} />
        <ClickableIcon icon={notificationIcon} />
      </div>

      <div className="logo-container">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="title-container">
          <h1 className="title">CuraNu</h1>
          <p className="secondry-title">Zorg en welzij</p>
        </div>
        <h2 className="motto">Intranet</h2>
      </div>
      <div className="navigation">
        <ul className="navigation-container">
          <li className="navigation-item">
            <a href="/">Artikelen</a>
          </li>
          <li className="navigation-item">
            <a href="/">Nieuws</a>
          </li>
          <li className="navigation-item">
            <a href="/">Evenementen</a>
          </li>
          <li className="navigation-item">
            <a href="/">Kwaliteitshandboek</a>
          </li>
        </ul>
        <div className="search-container">
          <input type="text" className="search-input" />
          <ClickableIcon icon={searchIcon} handleClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Header;
