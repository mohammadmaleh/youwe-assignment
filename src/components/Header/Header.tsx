import * as React from 'react';
import './Header.scss';
import cancelIcon from '../../assets/images/cancel.svg';
import Logo from '../../assets/images/CuraNu-Logo.png';
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
        <div className="widget-button">
          <img src={cancelIcon} alt="" />
        </div>
        <div className="widget-button">
          <img src={cancelIcon} alt="" />
        </div>
      </div>
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
