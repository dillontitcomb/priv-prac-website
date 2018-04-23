import React from 'react';
import PropTypes from 'prop-types';

function Service(props){
  return (
    <div>
      <h3>{props.name}, {props.cost}</h3>
      <style jsx>{`
        `}</style>
    </div>
  );
}

Service.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired
};

export default Service;
