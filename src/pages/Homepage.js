import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import HeroSection from "../components/HeroSection";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "#f3f3f3",
		maxWidth: "1500px",
		minWidth: "320px",
	},
}));

const HomePage = () => {
	const classes = useStyles();

	return (
		<Container className={classes.container}>
			<HeroSection />
			<Technologies />
			<Projects />
		</Container>
	);
};

export default HomePage;
