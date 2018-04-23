import React from 'react';

function Admin(){
  return (
    <div>
      <div>
        <h1>Administrator Home</h1>
        <button>Manage Clients</button>
        <button>Manage Appointments</button>
      </div>
      <style jsx>{`
					div.jumbotron {
						background-color: #DEEDFF;
					}
							`}
      </style>
    </div>
  );
}

export default Admin;
