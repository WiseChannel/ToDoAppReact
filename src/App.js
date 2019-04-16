import React, { Component } from 'react';
import './App.css';

  function MyApp(props) {
    return(
      <div className='AppStyle'>
        <div className='positionBox'>
          <input type='checkbox'/>
          <p>Text here</p>
        </div>

        <div className='positionBox'>
          <input type='checkbox'/>
          <p>Text here</p>
        </div>

        <div className='positionBox'>
          <input type='checkbox'/>
          <p>Text here</p>
        </div>

        <div className='positionBox'>
          <input type='checkbox'/>
          <p>Text here</p>
        </div>

      </div>
    )
  }


  const style = {
    fontWeight: 'bold',
    fontSize: 20px,
    display: 'flex'
  }


  export default MyApp
