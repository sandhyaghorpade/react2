import React from 'react';
import './HeroSection.css';
import './Button.css';
import Button from './Button';
import Hotel from './Hotel';
import { Link } from 'react-router-dom';
 
export default function LoginInitial() {
 
  return( 
 
<div className='LoginAs'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      {/* <h1>Ads Management</h1>
      <p>What are you waiting for?</p> */}
      {/* <h1> login</h1> */}
      <div className='logintag'>
          <h1>Login As</h1>
          </div>
          <div>
        
          <Link to='/login' className='btn-mobile'>
 
          <button class="buttonCust" >Customer</button>
          </Link>
          <Link to='/home' className='btn-mobile'>
 
          <button class="buttonStaf"  variant="outline-primary">
              
              Staff</button>
</Link>
 
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Customer
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Staff<i className='far fa-play-circle' />
        </Button> */}
      </div>
    
</div>
  
  );


 
}