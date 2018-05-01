import React from 'react';
import { Link } from 'react-router-dom';
import treeLogo from '../assets/images/treelogo.png';


function Header(){
  return (
    <div className="topnav">
			<img className="treeLogo" src={treeLogo}></img>
      <Link className="link active" to="/">HOME</Link>
      <Link className="link" to="/about">ABOUT</Link>
      <Link className="link" to="/counselors">COUNSELORS</Link>
      <Link className="link" to="/approach">APPROACH</Link>
      <Link className="link" to="/services">SERVICES</Link>
      <Link className="link" to="/resources">RESOURCES</Link>
      <Link className="link" to="/admin">ADMIN</Link>
      <style jsx>{`
					.topnav {
						display: flex;
						align-items: center;
						background-color: #F7F9FB;
						overflow: hidden;
					}

				 	.topnav .link {
						text-align: center;
						float: left;
						color: #31708E;
						text-decoration: none;
						padding: 5px;
						font-size: 18px;
					}

					.topnav .link:hover {
						background-color: #8FC1E3;
    				color: black;
					}

					.topnav .treeLogo {
						float: left;
						max-width: 120px;
						max-height: 120px;
						padding: 10px;
						margin: 10px;
					}

							`}</style>
    </div>
  );
}

export default Header;
