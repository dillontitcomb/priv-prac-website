import React from 'react';
import office from '../../assets/images/office.jpg';
import { Link } from 'react-router-dom';

function Home(){
  const callToAction = '"Are you feeling a bit shaken, maybe stirred, maybe fearful and doubtful and completely utterly, wildly terrified? Good. Keep going."';
  const welcomeText = 'Take a deep breath. You\'re in good hands.';
  return (
    <div>
      <div className="topimage">
        <div className="overlay">
          <h1 className="calltoaction">{callToAction}</h1><br/>
					<h4 className="quoteattr">-VICTORIA ERICKSON</h4>
        </div>
      </div>
      <div className="jumbotron">
        <h1>{welcomeText}</h1>
        <hr></hr>
        <Link to="/new-client">Schedule an session</Link>
      </div>
      <style jsx>{`
					div.topimage {
						height: 600px;
						background-image: url(${office});
						background-size: cover;
						background-repeat: no-repeat;
						background-position: bottom center;
					}

					div.jumbotron {
						background-color: #DEEDFF;
					}

					div.overlay {
						width: 100%;
						height: 100%;
						background: rgba(70, 72, 82, 0.7);
					}

					.calltoaction {
						display: inline-block;
						font-family: Georgia;
						color: #F7F9FB;
						font-size: 50px;
						font-weight: lighter;
						max-width: 900px;
						margin-top: 160px;
					}

					.quoteattr {
						color: #F7F9FB;
					}
							`}
      </style>
    </div>
  );
}

export default Home;
