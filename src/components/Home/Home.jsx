import React from "react";

function Home(){
	const welcomeText = "Take a deep breath. You're in good hands."
  return (
      <div>
				<div className="jumbotron">
					<h1>{welcomeText}</h1>
					<hr></hr>
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

export default Home;
