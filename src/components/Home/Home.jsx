import React from 'react';
import office from '../../assets/images/office.jpg';

function Home(){
  const callToAction = 'Welcome to Mackenzie & Friends Counseling Group';
  const welcomeText = 'Take a deep breath. You\'re in good hands.';
  return (
    <div>
      <div className="topimage">
        <div className="overlay">
          <h1 className="calltoaction">{callToAction}</h1>
        </div>
      </div>
      <div className="jumbotron">
        <h1>{welcomeText}</h1>
        <hr></hr>
        <button>Schedule an session</button>
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
						background: rgba(70, 72, 82, 0.6);
					}

					.calltoaction {
						display: inline-block;
						color: white;
						font-size: 80px;
						font-weight: lighter;
						max-width: 900px;
						margin-top: 160px;
					}
							`}
      </style>
    </div>
  );
}

export default Home;
