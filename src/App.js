
import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'

  // function MyApp(props) {
  //   return(
  //     <div className='AppStyle'>
  //       <div className='positionBox'>
  //         <input type='checkbox'/>
  //         <p>Text here</p>
  //       </div>
  //
  //       <div className='positionBox'>
  //         <input type='checkbox'/>
  //         <p>Text here</p>
  //       </div>                               // Old versio
  //
  //       <div className='positionBox'>
  //         <input type='checkbox'/>
  //         <p>Text here</p>
  //       </div>
  //
  //       <div className='positionBox'>
  //         <input type='checkbox'/>
  //         <p>Text here</p>
  //       </div>
  //
  //     </div>
  //
  //   )
  // }


    function MyApp() {
        return(
            <div>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
        )
    }



  export default MyApp
