import * as React from 'react';
import './Header.scss';
import cancelIcon from '../../assets/images/cancel.svg';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="header">
      <div className="menu">
      <a href="/"  className='menu-item'>FAQ</a>
      <a href="/"  className='menu-item'>FAQ</a>
      <a href="/"  className='menu-item'>FAQ</a>
      <a href="/"  className='menu-item'>FAQ</a>
      <a href="/"  className='menu-item'>FAQ</a>
      </div>
      <div className="widget-button">
        <img src={cancelIcon} alt="" />

        
      </div> <div className="widget-button">
      <img src={cancelIcon} alt="" />

      
    </div>
    </div>
  );
};

export default Header;
