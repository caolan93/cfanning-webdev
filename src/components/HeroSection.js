import React from "react";
import { motion } from "framer-motion";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

import selfie from "../images/profile.jpg";

const useStyles = makeStyles((theme) => ({
	heroSection: {
		minHeight: "100vh",
	},
	welcomeSection: {
		margin: "auto",
		height: "350px",
		[theme.breakpoints.down("sm")]: {
			maxWidth: "400px",
			margin: "50px auto 25px auto",
		},
	},
	image: {
		width: "400px",
		objectFit: "contain",
		margin: "auto",
		[theme.breakpoints.down("sm")]: {
			width: "288px",
			objectFit: "contain",
			margin: "25px 0 50px 0",
		},
	},
	title: {
		fontWeight: 700,
	},
}));

const titleVariants = {
	hidden: {
		opacity: 0,
		y: 500,
	},
	show: {
		opacity: [0.25, 0.5, 0.75, 1],
		y: 0,
		transition: { duration: 0.75 },
	},
};

const HeroSection = () => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Grid
			component={motion.div}
			variants={titleVariants}
			initial='hidden'
			animate='show'
			className={classes.heroSection}
			container>
			<Grid
				className={classes.welcomeSection}
				item
				container
				justify='space-around'
				alignItems='center'
				direction='column'
				md={6}>
				<Grid item>
					<Typography
						component={matches ? motion.h4 : motion.h3}
						className={classes.title}
						variant={matches ? "h4" : "h3"}>
						Welcome!
					</Typography>
				</Grid>
				<Grid item>
					<Typography align='center' variant='subtitle1'>
						My name is Caolan Fanning and this is my personal portfolio! I built
						this website to showcase some of my skills as a web developer. Enjoy
						your stay!
					</Typography>
				</Grid>
				<Grid item>
					<Button
						variant='contained'
						color='primary'
						size='large'
						component={Link}
						to='/about'>
						Read More...
					</Button>
				</Grid>
			</Grid>
			<Grid item container alignItems='center' direction='column' md={6}>
				<img className={classes.image} src={selfie} alt='me and steve' />
			</Grid>
		</Grid>
	);
};

export default HeroSection;
