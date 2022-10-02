import React from "react";
import { Navbar } from "./Navbar";
import { Container } from "./Container";
import { Footer } from "./Footer";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	<>	
		<Navbar/>
		<Container/>
		<Footer/>
	</>
	);
};

export default Home;
