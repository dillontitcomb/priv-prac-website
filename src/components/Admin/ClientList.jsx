import React from 'react';
import PropTypes from 'prop-types';
import Client from './Client';

function ClientList(props){
  return (
    <div>
      <div>
        <h1>Current Clients:</h1>
				{Object.keys(props.clientList).map(function(clientId) {
					let client = props.clientList[clientId];
					return <Client name={client.name}
						phone={client.phone}
						email={client.email}
						bio={client.bio}
						key={clientId}
						clientId={clientId} />
				})}
      </div>
      <style jsx>{`
							`}
      </style>
    </div>
  );
}

ClientList.propTypes = {
	clientList: PropTypes.object
}

export default ClientList;
