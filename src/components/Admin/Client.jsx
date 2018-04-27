import React from 'react';
import PropTypes from 'prop-types';

function Client(props){
  const clientInformation =
    <div className="clientInfo">
      <h3>{props.name}</h3>
      <h6>{props.email} - {props.phone}</h6>
      <p>{props.bio}</p>
    </div>;

  return (
    <div>
      {clientInformation}
      <style jsx>{`
				div.clientInfo {
					width: 90%;
					min-width: 150px;
					max-width: 600px;
					margin: auto;
					margin-bottom: 10px;
					padding-left: 10px;
					padding-right: 10px;
					border: 2px solid black;
					text-align: left;
				}

				div.clientInfo h3 {
					color: blue;
					margin-top: 10px;
					margin-bottom: 10px;
					padding: 0px;
				}

				div.clientInfo h6 {
					margin: 0px;
					padding: 0px;
				}

				div.clientInfo p {
					margin-top: 10px;
					margin-bottom: 10px;
					padding: 0px;
				}

			`}</style>
    </div>
  );
}

Client.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  clientId: PropTypes.string.isRequired
};

export default Client;
