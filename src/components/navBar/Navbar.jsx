import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import billbillLogo from './../../assets/billbill_logo_1.jpg';
import "./Navbar.css";
import { menuItems } from "./menuItems";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiHeadphoneAlt } from "react-icons/tfi";




const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState();
useEffect(()=>{
  setToggleMenu(true);
}, [])

  return (
    <div className="navbar-container">
      <div className="navbar-logo mx-2">
        <img src={billbillLogo} />
      </div>
      <div className="navbar-content">

        <div className="navbar-links-container">
          {menuItems.map((item, index) => {
            return (<p key={index}><a className="mx-2 underline-effect" href={item.tag}>{item.name}</a></p>)
          })}

          <div className="navbar-info">
            <TfiLocationPin size={20} className="mx-1" />
            <p>Chile 680, Buenos Aires, Argentina</p>
            <div className='mx-1'></div>
            <TfiHeadphoneAlt size={20} className="mx-1" />
            <p>+54911-23914629</p>
          </div>
        </div>

      </div>



      <div className="gpt3__navbar-menu">
        {!toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={()=>setToggleMenu(true)} />
          : <RiMenu3Line color="#000" size={27} onClick={()=>setToggleMenu(false)} />}
        {/* {toggleMenu && ( */}
          <div className={toggleMenu ? 'gpt3__navbar-menu_container show-menu' : 'gpt3__navbar-menu_container  hide-menu'}>
            <div className="gpt3__navbar-menu_container-links">
              {menuItems.map((item, index) => {
                return (<p key={index}><a className="mx-2 underline-effect" href={item.tag}>{item.name}</a></p>)
              })}
            </div>
          </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;

