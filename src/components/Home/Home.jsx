import React from 'react';
import mtnrange from '../../assets/images/mtn-range.jpg';
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
      <div className="homeTextContainer">
        <h1>{welcomeText}</h1>
				<h3 className="textBlock">Lorem ipsum dolor sit amet, consul timeam et nam, cu duo ipsum reprimique. Saperet voluptatum repudiandae mea ut. Blandit invenire ad pri, et omnes voluptatum dissentias vel, in ius nisl invenire platonem. <br/><br/>Ad vim esse dolorum assentior, inermis persecuti sit an. Cum esse vocibus reprimique id, has tation indoctum delicatissimi et, ex per laudem vituperata. Malorum virtute in nam, iisque luptatum eum in.</h3>
        <hr></hr>
        <button><Link className="scheduleSesh" to="/new-client">FREE CONSULTATION</Link></button>
      </div>
			<div className="homeBotTextContainer">
				<h1>Tell us everything.</h1>
				<h3 className="textBlock">Lorem ipsum dolor sit amet, consul timeam et nam, cu duo ipsum reprimique. Saperet voluptatum repudiandae mea ut. Blandit invenire ad pri, et omnes voluptatum dissentias vel, in ius nisl invenire platonem. <br/><br/>Ad vim esse dolorum assentior, inermis persecuti sit an. Cum esse vocibus reprimique id, has tation indoctum delicatissimi et, ex per laudem vituperata. Malorum virtute in nam, iisque luptatum eum in.</h3>
        <hr></hr>
        <button><Link className="scheduleSesh" to="/new-client">FREE CONSULTATION</Link></button>
			</div>
      <style jsx>{`
					div.topimage {
						height: 600px;
						background-image: url(${mtnrange});
						background-size: cover;
						background-repeat: no-repeat;
						background-position: center center;
					}

					div.overlay {
						width: 100%;
						height: 100%;
						background: rgba(20,80,80, 0.1);
					}

					.calltoaction {
						display: inline-block;
						font-family: Georgia;
						color: #FCFDFD;
						font-size: 50px;
						font-weight: lighter;
						max-width: 900px;
						margin-top: 160px;
					}

					.quoteattr {
						color: #FCFDFD;
					}

					.homeTextContainer {
						max-width: 960px;
						margin: auto;
						margin-top: 50px;
						margin-bottom: 50px;
					}

					.textBlock {
						font-weight: lighter;
					}
					button {
						width: 200px;
						height: 50px;
						background-color: #9F84BD;
						border-style: none;
						margin-top: 20px;
						margin-bottom: 20px;
					}
					.scheduleSesh {
						font-size: 14px;
						color: #FCFDFD;
						text-decoration: none;
					}

					.homeBotTextContainer {
						max-width: 960px;
						margin: auto;
						margin-top: 50px;
						margin-bottom: 50px;
					}

							`}
      </style>
    </div>
  );
}

export default Home;
