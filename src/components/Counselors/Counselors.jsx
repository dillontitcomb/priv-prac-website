import React from 'react';
import Counselor from './Counselor';

const masterCounselorsList = [
  {name: 'Mackenzie Moll',
    specialty: 'Anxiety & Depression'},
  {name: 'Brooke LastName',
    specialty: 'Career Counseling'},
  {name: 'FirstName LastName',
    specialty: 'Early Life Trauma'}
];

function Counselors(){
  return (
    <div>
      <div>
        <h1>Our Counselors:</h1>
	        {masterCounselorsList.map((counselor, index) =>
	          <Counselor name={counselor.name}
	            specialty={counselor.specialty}
	            key={index}/>
	        )}
				<button>Schedule an session</button>
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

export default Counselors;
