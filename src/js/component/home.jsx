import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";




//create your first component
const Home = () => {

	const ImgSrc1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4eHKbsUb4oCBAeUXn4N-7W5AE51TWR9pMzg&s"
	const ImgSrc2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVFo-9mSSV3pBzkM_rt0QNxgr_42b-E5fMQ&s"
	const ImgSrc3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ey0bP5CCYygz3jciM3eoMLYBlX7IZMic9A&s"
	const ImgSrc4 = "https://external-preview.redd.it/its-been-three-days-since-i-discovered-touchdesigner-v0-ZWF4eHg4MXQzb3RkMaoVnjldafcnZC5ThbGSj8Eo7z5xrUsib-WTU6Bt2pFa.png?format=pjpg&auto=webp&s=a5d0989b6a155b6e9fe838e6308aff3b6f7d1e22"
	const Titulo1 = "Cloudy Mayhem"
	const Titulo2 = "Industrial Blades"
	const Titulo3 = "Vector Ghost"
	const Titulo4 = "Sand Struumm"
	return (
		<div className="container">
			<Navbar />
			<div className="container bg-light rounded">
				<Jumbotron 
				text = 'TouchDesigner is a node-based visual programming language for real-time interactive multimedia content. Developed by the Toronto-based company Derivative, it is often used by artists, programmers, creative coders, software designers, and performers to create performances, installations, and fixed media works.'/>
			</div>
			<div className="container d-flex justify-content-center">
				<div className="row d-flex grid gap-5">
					<Card
						ImgSrc={ImgSrc1}
						Titulo={Titulo1}
						description= "Generative Art with TouchDesigner. Digital simulated dusty clouds with a sort of shapes and dull colors." />
					<Card
						ImgSrc={ImgSrc2}
						Titulo={Titulo2}
						description= "Generative Art with TouchDesigner. Shinny and dark digital blades made by angular shapes." />
					<Card
						ImgSrc={ImgSrc3}
						Titulo={Titulo3}
						description= "Generative Art with TouchDesigner. Blurry vectors and straight lines creating an etereal shape." />
					<Card
						ImgSrc={ImgSrc4}
						Titulo={Titulo4}
						description= "Generative Art with TouchDesigner. Wavy mathematical but organic lines following the art of nature."  />
				</div>
			</div>
		</div>

	);
};

export default Home;