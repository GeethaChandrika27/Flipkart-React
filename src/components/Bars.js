import React from 'react'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import img5 from '../images/5.png'
import img6 from '../images/6.png'
import img7 from '../images/7.png'
import img8 from '../images/8.png'
import img9 from '../images/9.png'
import img10 from '../images/10.png'
export default function Bars() {
  return (
    <>
      <div className='col-md-1'><br/></div>
      <div className="row mt-2">
        <div className="col-md-1 im">
          <img src={img1} alt='image1'/>
          <p>Top Offers</p>
        </div>
        <div className="col-md-1 im">
          <img src={img2} alt='image2'/>
          <p>Mobiles & Tablets</p>
        </div>
        <div className="col-md-1 im">
          <img src={img3} alt='image3'/>
          <p>Electronics</p>
        </div>
        <div className="col-md-1 im">
          <img src={img4} alt='image4'/>
          <p>TVs & Appliances</p>
        </div>
        <div className="col-md-1 im">
          <img src={img5} alt='image5'/>
          <p>Fashion</p>
        </div>
        <div className="col-md-1 im">
          <img src={img6} alt='image6'/>
          <p>Beauty</p>
        </div>
        <div className="col-md-1 im">
          <img src={img7} alt='image7'/>
          <p>Home & Kitchen</p>
        </div>
        <div className="col-md-1 im">
          <img src={img8} alt='image8'/>
          <p>Furniture</p>
        </div>
        <div className="col-md-1 im">
            <img src={img9} alt='image9'/>
            <p>Flights</p>
        </div>
        <div className="col-md-1 im">
          <img src={img10} alt='image10'/>
          <p>Grocery</p>
        </div>
      </div>
    </>
  )
}
