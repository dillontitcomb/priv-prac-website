import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div className="topnav">
      <Link className="link active" to="/">Home</Link>
      <Link className="link" to="/about">About</Link>
      <Link className="link" to="/counselors">Our Counselors</Link>
      <Link className="link" to="/approach">Approach</Link>
      <Link className="link" to="/services">Services</Link>
      <Link className="link" to="/resources">Resources</Link>
      <Link className="link" to="/admin">Admin</Link>
      <style jsx>{`
					.topnav {
						background-color: white;
						overflow: hidden;
					}

				 	.topnav .link {
						text-align: center;
						float: left;
						color: black;
						text-decoration: none;
						padding: 5px;
						font-size: 18px;
					}

					.topnav .link:hover {
						background-color: #ddd;
    				color: black;
					}

							`}</style>
    </div>
  );
}

export default Header;
