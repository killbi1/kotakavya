import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Cop extends React.Component{

	render(){
		
		return(
         
        <div>
        <form>
		<table align="center">
		<h1>PROJECT DETAILS</h1>
  		<tr>
    	<td>TITLE:</td>
    	<td><input type="text" name="" placeholder="TITLE"/></td>
  		</tr>
  		<tr>
    	<td>TOTAL NO OF CUSTOMERS:</td>
    	<td><input type="text" name="" placeholder="COUNT"/></td>
  		</tr>
  		<div class="pagination">
  		<a href="#">&laquo;</a>
  		<a href="#" class="active">1</a>
  		<a href="#">2</a>
  		<a href="#">3</a>
  		<a href="#">4</a>
  		<a href="#">5</a>
  		<a href="#">&raquo;</a>
  		</div>
  		<tr>
    	<td><Link to="/CDetails"><input type="button" value="NEXT"/></Link></td>
    	<td><Link to="/Addcustomer"><input type="button" value="ADD NEW CUSTOMER"/></Link></td>
  		</tr>
  		</table>
		</form>
		</div>

		);
	
	}

}
export default Cop;