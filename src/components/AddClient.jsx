import React from 'react';
import PropTypes from 'prop-types';

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
    <div>
      <form onSubmit={handleNewClientFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='First and last name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='phone'
          placeholder='Phone number'
          ref={(input) => {_phone = input;}}/>
				<input
          id='email'
          placeholder='Email address.'
          ref={(input) => {_email = input;}}/>
				<textarea
          id='bio'
          placeholder='A little bit about yourself.'
          ref={(textarea) => {_bio = textarea;}}/>
				<button type='submit'>Add client</button>
      </form>
    </div>
  );
}

AddClient.propTypes = {
  onAddClient: PropTypes.func
};

export default AddClient;
