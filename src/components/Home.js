import React from 'react'
import logo from '../images/logo.png'
export const Home = () => {
  return (
    <>
      <div className='header'>
        <div className="header_first">
           <img src={logo} alt='flipkart logo' />
        </div>
        <div className="header_second">
           <input type="text" placeholder="Search for products" className="search-input"/>
           <i className="fa fa-search"></i>
        </div>
        <div className="header_third">
          <button>Login</button>
        </div>
        <div className="header_fouth">
          <span>More</span>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div className="header_fifth">
          <i class="fa-solid fa-cart-shopping"></i>
          <span>Cart</span>
          </div>
      </div> 
    </>
  )
}
export default Home;
    

