import React from 'react';
import { Link } from 'react-router-dom';
import treeLogo from '../assets/images/treelogo-purp.png';


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
						background-color: #FCFDFD;
						overflow: hidden;
					}

				 	.topnav .link {
						text-align: center;
						float: left;
						color: #5085A5;
						text-decoration: none;
						padding: 5px;
						margin-right: 15px;
						font-size: 18px;
					}

					.topnav .link:hover {
    				color: #8FC1E3;
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
