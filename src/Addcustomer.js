import React from 'react';

class Addcustomer extends React.Component{

	render(){
		
		return(
         
         <div>
           <form>
    <table align="center">
    <h1>WELCOME TO NEW CUSTOMER</h1>
      <tr>
      <td>NAME:</td>
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
      <input type="submit" value="SUBMIT" name="submit"/>

    </form>
         </div>

			);
	}
		
}
export default Addcustomer;