import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {increament,decreament,asyncIncreament,asyncDecreament,asyncIncreamentTimer,asyncDecreamentTimer} from './store/action/action'

function mstp(state){
  return {
    count: state.Counter,
  }
}


class App extends Component {
  constructor(props){
    super(props);
    this.increament=this.increament.bind(this);
    this.decreament=this.decreament.bind(this);
    this.asyncIncreament=this.asyncIncreament.bind(this);
    this.asyncDecreament=this.asyncDecreament.bind(this);
    this.asyncIncreamentTimer=this.asyncIncreamentTimer.bind(this);
    this.asyncDecreamentTimer=this.asyncDecreamentTimer.bind(this);
  }

increament(){
  //console.log(this.props);
  // 1 increment: () => dispatch(increament()),
  // 1 ye tab use huga jub hum map dispatch to props ka function use kare gey
 // this.props.dispatch(increament());
//  this.props.increament(this.props.count)
   var {dispatch}= this.props;
   dispatch(increament());
}

decreament(){
  // 1 decrement: () => dispatch(decreament()),
 // this.props.dispatch(decreament());
//  this.props.decreament(this.props.count);
   var {dispatch}= this.props;
   dispatch(decreament());
}

asyncIncreament(){
  console.log('async render increament')
  var {dispatch}= this.props;
  dispatch(asyncIncreament());
}
asyncDecreament(){
  var {dispatch}= this.props;
  dispatch(asyncDecreament());
}

asyncIncreamentTimer(){
  console.log('async render increament Timer')
  var {dispatch}= this.props;
  dispatch(asyncIncreamentTimer());
}
asyncDecreamentTimer(){
  var {dispatch}= this.props;
  dispatch(asyncDecreamentTimer());
}



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          
        </div>
        <p className="App-intro"></p>
          <div><p>{this.props.count}</p></div>
          <button onClick={this.increament}>increament</button>
          <button onClick={this.decreament}>decreament</button>
          <div>
          <br/>
            <h4>counter with thunk Middleware</h4>
            <button onClick={this.asyncIncreament}>AsyncIncreament</button>
            <button onClick={this.asyncDecreament}>AsyncDecreament</button>
          </div>
          <div>
            <br/>
            <h4>counter with thunk Middleware + timer <br/> after 1 second</h4>
            <button onClick={this.asyncIncreamentTimer}>AsyncIncreament Timer</button>
            <button onClick={this.asyncDecreamentTimer}>AsyncDecreament Timer</button>
          </div>
      </div>
    );
  }
}

export default connect(mstp)(App);
// yahn connect k second argu ma {} braket ki jaga kch nh lagaye gey tu humey dusrey tareqy se 
// dispatch krwana huga jo uper comments 3 mein hai
