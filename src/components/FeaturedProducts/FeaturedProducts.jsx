import React from 'react';
import './FeaturedProducts.scss';
import Cards from '../Cards/Cards';

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: './images/arianna2.jpg',
            img2: './images/arianna1.jpg',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: './images/arianna2.jpg',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: './images/arianna2.jpg',
            title: 'Long Sleeve Graphic T-shirt',
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: './images/arianna2.jpg',
            title: 'Long Sleeve Graphic T-shirt',
            oldPrice: 19,
            price: 12,
        },
    ]

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veritatis laudantium 
                tempore earum consequatur commodi dolorum ab dolor at eligendi vero cumque laboriosam 
                eum tenetur et, nobis dolore soluta est?
            </p>
        </div>
        <div className="bottom">
            {data.map(item => (
                <Cards item={item} key={item.id}/>
                ))}
        </div>
    </div>
  )
}

export default FeaturedProducts