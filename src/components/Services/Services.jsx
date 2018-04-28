import React from 'react';
import Service from './Service';
import { Link } from 'react-router-dom';

const masterServicesList = [
  {name: 'Individual Therapy',
    cost: '$110 per session'},
  {name: 'Family Therapy',
    cost: '$150 per session'},
  {name: 'Couples Therapy',
    cost: '$135 per session'}
];

function Services(){
  return (
    <div>
      <div>
        <h1>Our Services:</h1>
        {masterServicesList.map((service, index) =>
          <Service name={service.name}
            cost={service.cost}
            key={index}/>
	        )}
        <Link to="/new-client">Schedule an session</Link>
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

export default Services;
