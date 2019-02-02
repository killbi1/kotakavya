import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Allprojects extends React.Component{

	render(){
		
		return(
         
         <div>
         <br/><br/> <h1>ALL PROJECTS</h1><br/><br/>
    <select id="Allprojects" name="Allprojects">
      <option value="null">LIST OF PROJECTS</option><br/>
      <option value="Event management system">EVENT MANAGEMENT SYSTEM</option>
      <option value="Walk a way for welfare">WALK AWAY FOR WELFARE</option>
      <option value="School management system">SCHOOL MANAGEMENT SYSTEM</option>
      <option value="Hospital management system">HOSPITAL MANAGEMENT SYSTEM</option>
    </select><br/><br/>
           <Link to="/Cop"><input type="submit" value="Submit"/></Link><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <Link to="/Addproject"><input type="button" value="ADDNEWPROJECT"/></Link>
      </div>

			);
	}
		
}
export default Allprojects;