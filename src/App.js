import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {increament,decreament} from './store/action/action'

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
      </div>
    );
  }
}

export default connect(mstp)(App);
// yahn connect k second argu ma {} braket ki jaga kch nh lagaye gey tu humey dusrey tareqy se 
// dispatch krwana huga jo uper comments 3 mein hai
