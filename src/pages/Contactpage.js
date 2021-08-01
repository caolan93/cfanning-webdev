import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Contact from "../components/Contact";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "#f3f3f3",
		maxWidth: "1500px",
		minWidth: "320px",
	},
}));

const Contactpage = () => {
	const classes = useStyles();

	return (
		<Container className={classes.container}>
			<Contact />
		</Container>
	);
};

export default Contactpage;
