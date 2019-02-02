import React from 'react';

class Addproject extends React.Component{

	render(){
		
		return(
         
         <div>
           <form>
    <table align="center">
    <h1>ADD NEW PROJECT</h1>
      <tr>
        <td>NAME:</td>
        <td><input type="text" name="" placeholder="NAME"/></td>
      </tr>
      <tr>
      <td>DATE:</td>
      <td><input type="text" name="" placeholder="DATE"/></td>
      </tr>
      <tr>
      <td>DESCRIPTION:</td>
      <td><p><input type="text" name="" placeholder="TEXT"/></p></td>
      </tr>
    </table>
      <input type="submit" value="SUBMIT" name="submit"/>

    </form>
         </div>

			);
	}
		
}
export default Addproject;