import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AddClient(props){
  let _name = null;
  let _phone = null;
  let _email = null;
  let _bio = null;

  function handleNewClientFormSubmission(event) {
    event.preventDefault();
    props.onAddClient({name: _name.value, phone: _phone.value, email: _email.value, bio: _bio.value});
    _name.value = '';
    _phone.value = '';
    _email.value = '';
    _bio.value = '';
  }

  return (
    <div className="addClientForm">
      <h3>Provide Client Information</h3>
      <form onSubmit={handleNewClientFormSubmission}>
        <p>Name</p>
        <input
          type='text'
          id='name'
          placeholder='First and last name'
          ref={(input) => {_name = input;}}/><br/>
        <p>Phone</p>
        <input
          type='text'
          id='phone'
          placeholder='Phone number'
          ref={(input) => {_phone = input;}}/><br/>
        <p>Email</p>
        <input
          id='email'
          placeholder='Email address.'
          ref={(input) => {_email = input;}}/><br/>
        <p>Bio</p>
        <textarea
          id='bio'
          placeholder='A little bit about yourself.'
          ref={(textarea) => {_bio = textarea;}}/><br/>
        <button type='submit'>Add client</button>
      </form>
      <br/>
      <Link to="/admin">Return to Admin Client Views</Link>
      <style jsx>{`
				div.addClientForm {
					margin: auto;
					margin-top: 20px;
					width: 500px;
					border: 2px solid black;
					text-align: center;
					padding-bottom: 10px;
				}

				form input {
					margin: 5px;
					width: 350px;
					height: 30px;
				}

				form textarea {
					margin: 5px;
					width: 350px;
					height: 100px;
				}

				form p {
					margin-left: 75px;
					margin-bottom: 0px;
					margin-top: 10px;
					padding: 0;
					text-align: left;
					font-weight: bold;
				}

			`}</style>
    </div>
  );
}

AddClient.propTypes = {
  onAddClient: PropTypes.func
};

export default AddClient;
