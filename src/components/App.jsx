import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Admin from './Admin/Admin';
import About from './About/About';
import Approach from './Approach/Approach';
import Services from './Services/Services';
import Resources from './Resources/Resources';
import Counselors from './Counselors/Counselors';
import Error404 from './Error404';

function App(){
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/approach' component={Approach} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/resources' component={Resources} />
				<Route exact path='/counselors' component={Counselors} />
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

export default App;
