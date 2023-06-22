import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/images/flag.png" alt="" className='flagImg'/>
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <Link className='link' to='/categories/1'>Women</Link>
          </div>
          <div className="item">
            <Link className='link' to='/categories/2'>Men</Link>
          </div>
          <div className="item">
            <Link className='link' to='/categories/3'>Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to='/'>FLEXSHOP</Link>
        </div>
        <div className="right">
        <div className="items">
          <Link className='link' to='/'>Homepage</Link>
        </div>
        <div className="items">
          <Link className='link' to='/'>About</Link>
        </div>
        <div className="items">
          <Link className='link' to='/'>Contact</Link>
        </div>
        <div className="items">
          <Link className='link' to='/'>Stores</Link>
        </div>
        <div className="icons">
          <SearchIcon/>
          <PersonOutlineIcon/>
          <FavoriteBorderIcon/>
          <div className="cartIcon">
          <ShoppingCartCheckoutIcon/>
          <span>0</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar