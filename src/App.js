import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loginpage from './Loginpage.js';
import Reg from './Reg.js';
import Allprojects from './Allprojects.js';
import Addproject from './Addproject.js';
import Cop from './Cop.js';
import Addcustomer from './Addcustomer.js';
import CDetails from './CDetails.js';
import * as storeAPI from './storeAPI';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

  
class App extends React.Component {

state={
  data:[]
}

componentDidMount(){
  storeAPI.getAll().then(res=>this.setState({data:res}))
}

  render() {
    console.log(this.state.data.users);
    return (
      <Router>
    <div className="App">

      <Route exact path="/" component={Loginpage}/>
      <Route path="/Reg" component={Reg} />
      <Route path="/Allprojects" component={Allprojects} />
      <Route path="/Addproject" component={Addproject} />
      <Route path="/Cop" component={Cop} />
      <Route path="/Addcustomer" component={Addcustomer} />
      <Route path="/CDetails" component={CDetails} />
    </div>
  </Router>

    )
  }
}

export default App;
