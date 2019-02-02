import React from 'react';

class CDetails extends React.Component{

	render(){
		
		return(
         
         <div>
           <form>
    <table align="center">
    <h1>CUSTOMER DETAILS</h1>
      <tr>
      <td>CUSTOMER NAME:</td>
      <td><input type="text" name="" placeholder="NAME"/></td>
      </tr>
      <tr>
      <td>PHONENO:</td>
      <td><input type="text" name="" placeholder="PHONENO"/></td>
      </tr>
      <tr>
      <td>EMAIL:</td>
      <td><input type="text" name="" placeholder="EMAIL"/></td>
      </tr>
      <tr>
      <td>ADDRESS:</td>
      <td><p><input type="text" name="" placeholder="ADDRESS"/></p></td>
      </tr>
    </table>
    </form>
         </div>

			);
	}
		
}
export default CDetails;