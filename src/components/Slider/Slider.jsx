import React, {useState} from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import './Slider.scss'

const Slider = () => {

    const data = [
        './images/ali-peazni.jpg',
        './images/anastasia-shuraeva.jpg',
        './images/andrea-piacquadio.jpg',
        './images/arianna1.jpg',
        './images/arianna2.jpg',
        './images/nappy.jpg',
    ]

    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1)
    }

   

  return (
    <div className='slider'>
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            <img src={data[3]} alt="" />
            <img src={data[4]} alt="" />
            <img src={data[5]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider