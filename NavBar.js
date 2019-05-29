import React, {Component} from 'react';



export default class NavBar extends Component {
   render(){
      return (
         <div>
            <div className="home">Home</div>
            <div className="about">About</div>
            <div className="contact">Contact</div>
            <div className="gallery">Gallery</div>
         </div>
      )
   }
}