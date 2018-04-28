import React from 'react';
import PropTypes from 'prop-types';
import ClientList from './ClientList';
import { Link } from 'react-router-dom';
import AddClient from '../AddClient';

function Admin(props){
  return (
    <div>
      <div>
        <h1>Administrator Home</h1>
        <ClientList clientList={props.clientList} currentRouterPath={props.currentRouterPath}/>
        <AddClient onAddClient={props.onAddClient} currentRouterPath={props.currentRouterPath}/>
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
	onAddClient: PropTypes.func,
  clientList: PropTypes.object,
	currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
