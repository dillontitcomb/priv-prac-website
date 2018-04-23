import React from 'react';
import PropTypes from 'prop-types';

function Counselor(props){
  return (
    <div>
      <h3>{props.name}, {props.specialty}</h3>
      <style jsx>{`
        `}</style>
    </div>
  );
}

Counselor.propTypes = {
  name: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired
};

export default Counselor;
