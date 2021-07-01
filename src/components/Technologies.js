import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import cssLogo from "../images/css.png";
import expressLogo from "../images/express.png";
import framerLogo from "../images/framer.png";
import githubLogo from "../images/github.png";
import htmlLogo from "../images/html.png";
import jsLogo from "../images/js.png";
import nodejsLogo from "../images/nodejs.png";
import npmLogo from "../images/npm.png";
import reactLogo from "../images/react.png";
import materialLogo from "../images/material.png";
import sassLogo from "../images/sass.png";
import reduxLogo from "../images/redux.png";
import mongodbLogo from "../images/mongodb.png";

const useStyles = makeStyles((theme) => ({
	navigation: {
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	container: {
		backgroundColor: "#F3F3F3",
		margin: "0px auto",
	},
	containerTwo: {
		margin: "20px",
	},
	techIcons: {
		objectFit: "contain",
		height: "60px",
		width: "60px",
		[theme.breakpoints.down("sm")]: {
			height: "45px",
			width: "45px",
		},
	},
}));

const Technologies = () => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("xs"));

	console.log(matches);

	return (
		<Grid className={classes.container} container md={10}>
			<Grid className={classes.container} container md={10}>
				<Grid className={classes.containerTwo} container spacing={2}>
					<Grid
						item
						container
						xs={12}
						sm={6}
						justify='center'
						alignItems='center'>
						<Typography
							style={{ padding: "10px" }}
							align={matches ? "center" : "left"}
							variant='body1'>
							When I began my web development journey I started with the core
							technogolies of HTML, CSS, and JavaScript. <br /> From there, as I
							gained confidence and experience (using these technogolies) I
							began to delve deeper into web development. I first tried SASS for
							all my styling needs, but quickly realised the importance of other
							tech. <br /> I began looking at JavaScript frames and decided on
							the JavaScript library of ReactJS. Upon researching and studying
							ReactJS, this began to open up many doors for me. <br />
							This includes tech such as Styled Components, Material UI, Redux
							and most recently the study of Backend web development. The latter
							of which I have looked at NodeJS, Express and MongoDB.
						</Typography>
					</Grid>
					<Grid
						item
						container
						xs={12}
						sm={6}
						justify='center'
						direction='column'>
						<Grid container justify='center' spacing={3}>
							<Grid
								item
								container
								justify='center'
								alignItems='center'
								spacing={2}>
								<Grid item container justify='center' xs={4}>
									<img
										className={classes.techIcons}
										src={htmlLogo}
										alt='html logo'
									/>
								</Grid>
								<Grid item container justify='center' xs={4}>
									<img
										className={classes.techIcons}
										src={cssLogo}
										alt='css logo'
									/>
								</Grid>
								<Grid item container justify='center' xs={4}>
									<img
										className={classes.techIcons}
										src={jsLogo}
										alt='js logo'
									/>
								</Grid>

								<Grid item container justify='center' xs={4}>
									<img
										className={classes.techIcons}
										src={reactLogo}
										alt='react logo'
									/>
								</Grid>
								<Grid item container justify='center' xs={4}>
									<img
										className={classes.techIcons}
										src={materialLogo}
										alt='material logo'
									/>
								</Grid>
								<Grid item container justify='center' xs={4}>
									<img
										className={classes.techIcons}
										src={sassLogo}
										alt='sass logo'
									/>
								</Grid>
							</Grid>
							<Grid item container justify='center' spacing={2}>
								<Grid item container justify='center' xs={4}>
									<img
										className={classes.techIcons}
										src={framerLogo}
										alt='framer logo'
									/>
								</Grid>
								<Grid item container justify='center' xs={4}>
									<img
										className={classes.techIcons}
										src={reduxLogo}
										alt='redux logo'
									/>
								</Grid>
								<Grid item container justify='center' xs={4}>
									<img
										className={classes.techIcons}
										src={githubLogo}
										alt='github logo'
									/>
								</Grid>
								<Grid item container justify='center' xs={4}>
									<img
										className={classes.techIcons}
										src={nodejsLogo}
										alt='node js logo'
									/>
								</Grid>
								<Grid item container justify='center' xs={4}>
									<img
										className={classes.techIcons}
										src={expressLogo}
										alt='express logo'
									/>
								</Grid>
								<Grid item container justify='center' xs={4}>
									<img
										className={classes.techIcons}
										src={mongodbLogo}
										alt='mongodb logo'
									/>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Technologies;
