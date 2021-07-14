import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import html from "../images/html.png";
import js from "../images/js.png";
import css from "../images/css.png";
import sass from "../images/sass.png";
import material from "../images/material.png";
import framer from "../images/framer.png";
import nodejs from "../images/nodejs.png";
import express from "../images/express.png";
import mongodb from "../images/mongodb.png";
import github from "../images/github.png";
import react from "../images/react.png";
import redux from "../images/redux.png";

const useStyles = makeStyles((theme) => ({
	technologySection: {
		minHeight: "600px",
	},
	techTalk: {
		margin: "auto",
		[theme.breakpoints.down("sm")]: {
			maxWidth: "400px",
			margin: "50px auto 25px auto",
		},
	},
	techLogo: {
		height: "45px",
		width: "45px",
		objectFit: "contain",
	},
	grid: {
		margin: "auto",
		height: "450px",
		[theme.breakpoints.down("sm")]: {
			maxWidth: "400px",
			margin: "50px auto 25px auto",
		},
	},
}));

const Technologies = () => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));

	const logoArr = [
		html,
		js,
		css,
		redux,
		react,
		nodejs,
		express,
		material,
		framer,
		mongodb,
		github,
		sass,
	];

	return (
		<Grid container className={classes.technologySection}>
			<Grid
				className={classes.grid}
				justify='center'
				alignItems='center'
				item
				container
				md={6}>
				{logoArr.map((logo) => (
					<Grid
						key={logo}
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						xs={4}
						item>
						<img className={classes.techLogo} src={logo} alt='html logo' />
					</Grid>
				))}
			</Grid>
			<Grid className={classes.techTalk} item container md={6}>
				<Typography align={matches ? "center" : "left"} variant='subtitle1'>
					When I began my webdev journey in Summer 2020, I started with the
					basics of HTML, CSS and JavaScript.
					{matches ? (
						""
					) : (
						<>
							<br />
							<br />
						</>
					)}
					From there, as I gained confidence and experience, I began to delve
					deeper into front-end development which included my introduction to
					technologies such as SASS and the ReactJS Library.{" "}
					{matches ? (
						""
					) : (
						<>
							<br />
							<br />
						</>
					)}
					This opened up many new doors on the front-end for me including
					animation libraries like Framer Motion, styled components and most
					recently (which I used for this website) Material UI.{" "}
					{matches ? (
						""
					) : (
						<>
							<br />
							<br />
						</>
					)}
					As I continue my learning and reseach I've began my journey into
					back-end development with projects using technologies like NodeJS,
					Express and MongoDB.
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Technologies;
