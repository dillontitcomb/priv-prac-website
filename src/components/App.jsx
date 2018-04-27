import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Admin from './Admin/Admin';
import About from './ContentPages/About/About';
import Approach from './ContentPages/Approach/Approach';
import Services from './Services/Services';
import Resources from './ContentPages/Resources/Resources';
import Counselors from './Counselors/Counselors';
import AddClient from './AddClient';
import Error404 from './Error404';
import { v4 } from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterClientList: {},
      masterServiceList: {},
      masterCounselorList: {},
      masterAppointmentList: {}
    };
    this.handleAddClient = this.handleAddClient.bind(this);
  }

  handleAddClient(newClient) {
    let newClientId = v4();
    let newMasterClientList = Object.assign({}, this.state.masterClientList, {[newClientId]: newClient});
    this.setState({masterClientList: newMasterClientList});
    console.log(this.state.masterClientList);
  }

  render(){
	  return (
      <div className="container">
    <Header/>
    <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/admin' render={()=><Admin clientList={this.state.masterClientList} />} />
          <Route exact path='/approach' component={Approach} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/resources' component={Resources} />
          <Route exact path='/counselors' component={Counselors} />
          <Route exact path='/new-client' render={()=><AddClient onAddClient={this.handleAddClient}/>} />
          <Route component={Error404} />
        </Switch>
    <Footer/>
    <style global jsx>{`
					body {
						margin: 0;
						background-color: #bccad6;
						font-family: Helvetica;
					}

					div.container {
						text-align: center;
						margin: auto;
					}
				`}</style>
  </div>
	  );
  }
}

export default App;
