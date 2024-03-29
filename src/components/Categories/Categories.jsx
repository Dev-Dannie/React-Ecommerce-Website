import React from 'react';
import './Categories.scss';
import {Link} from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="./images/anastasia-shuraeva.jpg" alt="" />
                <button>
                    <Link className='link' to='/categories/1'>Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src="./images/anastasia-shuraeva.jpg" alt="" />
                <button>
                    <Link className='link' to='/categories/2'>Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="./images/anastasia-shuraeva.jpg" alt="" />
                <button>
                    <Link className='link' to='/categories/3'>New Season</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="./images/anastasia-shuraeva.jpg" alt="" />
                <button>
                    <Link className='link' to='/categories/1'>Men</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="./images/anastasia-shuraeva.jpg" alt="" />
                <button>
                    <Link className='link' to='/categories/1'>Accessories</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="./images/anastasia-shuraeva.jpg" alt="" />
                <button>
                    <Link className='link' to='/categories/1'>Shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories