import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AddClient(props){
  let _name = null;
  let _phone = null;
  let _email = null;
  let _bio = null;
	let clientFormHeader = "Provide Client Information"
	let nameLabel = "Name";
	let phoneLabel = "Phone";
	let emailLabel = "Email";
	let bioLabel = "Bio";
	let buttonLabel = "Add Client";

  function handleNewClientFormSubmission(event) {
    event.preventDefault();
    props.onAddClient({name: _name.value, phone: _phone.value, email: _email.value, bio: _bio.value});
    _name.value = '';
    _phone.value = '';
    _email.value = '';
    _bio.value = '';
  }

	if (props.currentRouterPath !== "/admin") {
		clientFormHeader = "Welcome! Please provide your basic contact information. We'll contact you as soon as we can to schedule an appointment."
		nameLabel = "Please input your name";
		phoneLabel = "Please provide your phone number";
		emailLabel = "Input your email";
		bioLabel = "Tell us a bit about yourself";
		buttonLabel = "Submit";
	}

  return (
    <div className="addClientForm">
			<h3>{clientFormHeader}</h3>
      <form onSubmit={handleNewClientFormSubmission}>
				<p>{nameLabel}</p>
        <input
          type='text'
          id='name'
          placeholder='First and last name'
          ref={(input) => {_name = input;}}/><br/>
				<p>{phoneLabel}</p>
        <input
          type='text'
          id='phone'
          placeholder='Phone number'
          ref={(input) => {_phone = input;}}/><br/>
				<p>{emailLabel}</p>
        <input
          id='email'
          placeholder='Email address.'
          ref={(input) => {_email = input;}}/><br/>
				<p>{bioLabel}</p>
        <textarea
          id='bio'
          placeholder='A short bio'
          ref={(textarea) => {_bio = textarea;}}/><br/>
				<button type='submit'>{buttonLabel}</button>
      </form>
			<br/>
			{(props.currentRouterPath === "/admin") ? <Link to="/admin">Return to Admin Client Views</Link> : <Link to="/">Return Home</Link>}
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
  onAddClient: PropTypes.func,
	currentRouterPath: PropTypes.string.isRequired
};

export default AddClient;
