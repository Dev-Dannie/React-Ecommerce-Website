import React from 'react';
import './Categories.scss'

const Categories = ({Lowest, Highest}) => {
  return (
    <div className='categories'>
      <div className="lef">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1}/>
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='2' value={2}/>
            <label htmlFor="2">Skirt</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='3' value={3}/>
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={500}/>
            <span>500</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name='price' />
            <label htmlFor="asc">Price {Lowest}</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value='desc' name='price' />
            <label htmlFor="desc">Price {Highest}</label>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Categories