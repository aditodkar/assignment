import React, { Component } from 'react';
import './widget.css';
import { profilepic } from './images'; 

class App extends Component {
  render() {
    return (
      <div>
      		<div id="widget">

      			<div className="container">
      				<div className="header">
      					<h4 className="title">Let's Enhance</h4>
      				</div>

      				<div className="avatar">
      					<img src={profilepic} alt="Avatar" className="center"></img> 
      					<h4 className="name">Sofia</h4>
      				</div>

      				<div className="profileintro">
      					<h5 className="intro">Ask us anything, or share your feedback</h5>
      				</div>

      				<div className="response">
      					<h5 className="timer">Back tomorrow</h5>
      				</div>

      				<div className="send">
      					<h5 className="sendmsg">Send message</h5>
      					<i class="material-icons myicon">chat_bubble_outline</i>
      					<i class="material-icons myicon">backup</i>
      					<i class="material-icons myicon">thumb_up</i>
      				</div>


      			</div>

        	</div>

      </div>
    );
  }
}

export default App;