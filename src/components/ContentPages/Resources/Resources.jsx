import React from 'react';
import { Link } from 'react-router-dom';

function Resources(){
  return (
    <div>
      <div>
        <h1>Resources</h1>
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

export default Resources;
