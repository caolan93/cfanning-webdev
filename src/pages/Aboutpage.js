import React from "react";
import Photos from "../components/Photos";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import brad from "../images/brad.png";
import ania from "../images/ania.png";
import deved from "../images/deved.png";
import sonny from "../images/sonny.png";

import youtube from "../images/youtube.png";
import stack from "../images/stack.png";
import udemy from "../images/udemy.png";
import freecodecamp from "../images/freecodecamp.png";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "#f3f3f3",
		maxWidth: "1500px",
		minWidth: "320px",
	},
	div: {
		padding: "50px 0",
	},
}));

const Aboutpage = () => {
	const classes = useStyles();
	const theme = useTheme();

	const profilers = [
		{ img: brad, name: "Brad Traversy" },
		{ img: ania, name: "Ania Kubów" },
		{ img: deved, name: "Dev Ed" },
		{ img: sonny, name: "Sonny Sangha" },
	];
	const logos = [
		{ img: youtube, name: "Youtube" },
		{ img: stack, name: "StackOverFlow" },
		{ img: freecodecamp, name: "FreeCodeCamp" },
		{ img: udemy, name: "Udemy" },
	];

	return (
		<Container className={classes.container}>
			<div className={classes.div}>
				<Typography variant='subtitle1'>
					While obtaining my Mathematical Science Degree from T.U.D I attended a
					computer programming module which based around the programming
					language of C++ in my 2nd year of study. <br />
					The module quickly became my favourite lecture in college, but, upon
					completing the year and progressing into the 3rd year of my course I
					was given the disheartening news that the Computer Programming module
					had been removed from my course as not enough students had opted to
					attend the class.
					<br />
					<br />
					After completing my degree in 2020 in conjunction with the Covid-19
					outbreak I found myself with a lot more free time than I was expecting
					with the heavy restrictions both nationally and internationally.
					<br />I then made the decision to put my free time to good use and
					took it upon myself to make an effort to get back into programming!
					<br /> <br />
					From reading online, I gathered that a really good place to start as a
					self-taught programming would be with the technologies at the core of
					every web application you visit in your day to day life.
					<br /> These, of course, were the technologies HTML, CSS and
					JavaScript!
					<Photos images={logos} />
					I found myself learning through a wide variety of resources online
					which ranged from interactive learning websites and videos to reading
					public forums. <br /> Though I found myself learning through many
					different avenues, of course I had my favourite avenues of teaching...
					I feel obligated to share my personal favourites as they have helped
					me so much both on an individual basis and collectively in my pursuit
					to become a professional software engineer! <br /> The websites that I
					found helped me the most are; Freecodecamp, Youtube, Udemy and
					Stackoverflow.
					<br />
					<br />
					On an individual level the online teaches both through their free to
					view videos on Youtube and through some paid courses via their own
					personal websites or Udemy are: DevelopedByEd, TravesityMedia, Sonny
					Sanga, JavaScriptMastery and Anna Konga. <br /> I feel it would be
					ungrateful of me not to mention these creators on an individual level
					as they have helped me (and thousands of others) to reach a dream to
					become a programmer.
					<Photos images={profilers} />
					I have a great passion for learning and building projects. I'm
					focused, driven and I would love an opportunity to learn and grow not
					just as a developer but as a person.
					<br />
					Thanks for reading!
					<br /> Yours Sincerely, <br /> Caolan.
				</Typography>
			</div>
		</Container>
	);
};

export default Aboutpage;
