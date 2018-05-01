import React from 'react';

function Footer(){
  return (
    <div>
			<div className="footerContent">
      	<h1>123 Main Street, Seattle, WA 98102. (651)-227-2493</h1>
			</div>
			<style jsx>{`
					.footerContent {
						display: flex;
						align-items: center;
						height: 400px;
						background-color: #5085A5;
					}
					.footerContent h1 {
						margin: auto;
						color: snow;
					}




			`}</style>
    </div>
  );
}

export default Footer;
