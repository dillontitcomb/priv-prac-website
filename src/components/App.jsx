import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import About from './About/About';

function App(){
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
			<Footer/>
      <style global jsx>{`
				body {
					background-color: #C9C4F1;
				}

				div.container {
					max-width: 1400px;
					text-align: center;
					margin: auto;
				}
			`}</style>
    </div>
  );
}

export default App;
