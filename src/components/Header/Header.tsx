import * as React from 'react';
import cancelIcon from '../../assets/images/cancel.svg';
import Logo from '../../assets/images/CuraNu-logo.png';
import {ClickableIcon} from '../index';
interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="header">
      <div className="menu-container">
        <div className="menu">
          <a href="/" className="menu-item">
            FAQ
          </a>
          <a href="/" className="menu-item">
            FAQ
          </a>
          <a href="/" className="menu-item">
            FAQ
          </a>
          <a href="/" className="menu-item">
            FAQ
          </a>
          <a href="/" className="menu-item">
            FAQ
          </a>
        </div>
        <ClickableIcon icon={cancelIcon} />
        <ClickableIcon icon={cancelIcon} />
      </div>

      <div className="logo-container">
        <img src={Logo} alt="" />
        <div className="title-container">
          <h1 className="title">CuraNu</h1>
          <p className="secondry-title">Zorg en welzij</p>
        </div>
        <h2 className="motto">Intranet</h2>
      </div>
      <div className="navigation">
        <ul className="navigation-container">
          <li className="navigation-item">
            <a href="/">FAQ</a>
          </li>
          <li className="navigation-item">
            <a href="/">FAQ</a>
          </li>
          <li className="navigation-item">
            <a href="/">FAQ</a>
          </li>
          <li className="navigation-item">
            <a href="/">FAQ</a>
          </li>
          <li className="navigation-item">
            <a href="/">FAQ</a>
          </li>
          <li className="navigation-item">
            <a href="/">FAQ</a>
          </li>
          <li className="navigation-item">
            <a href="/">FAQ</a>
          </li>
        </ul>
        <div className="search-container">
          <input type="text" className="search-input" />
          <ClickableIcon icon={cancelIcon} handleClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Header;
