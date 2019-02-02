import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Reg extends React.Component{

	render(){

		return(

			<form>
			<table align="center">
			<h1>REGISTRATION PAGE</h1>
  		<tr>
    		<td>NAME:</td>
    		<td><input type="text" name="" placeholder="NAME"/></td>
  		</tr>
  		<tr>
    	<td>EMAIL:</td>
    	<td><input type="text" name="" placeholder="EMAIL"/></td>
  		</tr>
  		<tr>
    		<td>PASSWORD:</td>
    		<td><input type="text" name="" placeholder="PASSWORD"/></td>
  		</tr>
  		<tr>
    		<td>C-PASSWORD:</td>
    		<td><input type="text" name="" placeholder="C-PASSWORD"/></td>
  		</tr>
  		<tr>
    		<td>LOCATION:</td>
    		<td><input type="text" name="" placeholder="LOCATION"/></td><br/>
  		</tr>
  		<tr>
  		<td>
    	<Link to="/Allprojects"><input type="button" value="REGISTER"/></Link>
    	</td>
  		</tr>
		</table>
		</form>

			)
	}
}


export default Reg;