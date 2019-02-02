import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';

class Loginpage extends React.Component{

state={
  userid:"",
  password:"",
  clickEvent:0

}

eventtrigger=()=>{
  this.setState({clickEvent:true})
}

changeUid=(e)=>{
  this.setState({userid:e})
  console.log(this.state.userid)
}
changePwd=(e)=>{
  this.setState({password:e})
  console.log(this.state.userid)
}
eventtrigger=()=>{
  this.setState({clickEvent:1})
  // console.log(this.state.userid)
}
render(){


// function eventtrigger() {
//   // body...
//   alert("adalkd")
// }

// if (this.state.clickEvent==1) {

//         // this.setState({userid:"",password:""})
//         {<Link to="/Loginpage"></Link>}
//       };
	return(
      



		<div>
		<form>
		<table align="center">
		<h1>LOGIN PAGE</h1>
  		<tr>
    		<td>EMAIL:</td>
    		<td><input type="text" name="" placeholder="EMAIL" onChange={e=>this.changeUid(e.target.value)} /></td>
  		</tr>
  		<tr>
    	<td>PASSWORD:</td>
    	<td><input type="password" name=""  placeholder="PASSWORD" onChange={e=>this.changePwd(e.target.value)} /></td>
  		</tr>
  		<tr>
    	<td><Link to="/Allprojects"><input type="button" onClick={()=>this.eventtrigger()} value="LOGIN"/></Link></td>
    	<td><Link to="/Reg"><input type="button"  value="NEW USER"/></Link></td>
  		</tr>
		</table>
		</form>
		</div>

		);
	
	}

}

export default Loginpage;