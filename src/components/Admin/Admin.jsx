import React from 'react';
import PropTypes from 'prop-types';
import ClientList from './ClientList';
import { Link } from 'react-router-dom';

function Admin(props){
  return (
    <div>
      <div>
        <h1>Administrator Home</h1>
        <ClientList clientList={props.clientList}/>
        <Link to="/new-client">Add New Client</Link>
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

Admin.propTypes = {
  clientList: PropTypes.object
};

export default Admin;
