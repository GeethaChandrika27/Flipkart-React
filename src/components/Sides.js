import React from 'react'
import bar1 from '../images/bar1.png'
import bar2 from '../images/bar2.png'
import bar3 from '../images/bar3.png'
import bar4 from '../images/bar4.png'
import bar5 from '../images/bar5.png'
import bar6 from '../images/bar6.png'
export default function Sides() {
  return (
    <>
    <div className="col-md-1 gap"><br/></div>
      <div className='row'>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={bar1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={bar2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bar3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={bar4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={bar5} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={bar6} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    </>
  )
}
