import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import profile from "../images/profile.jpg";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	container: {
		margin: "0px auto",
	},
	containerTwo: {
		margin: "20px",
	},
	profilePicture: {
		objectFit: "contain",
		height: "500px",
		[theme.breakpoints.down("md")]: {
			height: "350px",
		},
	},
}));

const HeroSection = () => {
	const classes = useStyles();

	return (
		<Grid className={classes.container} container md={10}>
			<Grid container className={classes.container} md={10}>
				<Grid container className={classes.containerTwo} spacing={2}>
					<Grid
						item
						container
						xs={12}
						sm={6}
						justify='center'
						direction='column'>
						<Grid container justify='center' spacing={3}>
							<Grid item container justify='center'>
								<Typography variant='h3'>Welcome!</Typography>
							</Grid>
							<Grid item container justify='center'>
								<Typography align='center' variant='body1'>
									My name is Caolan Fanning. I am a self-taught Front-End web
									developer. Welcome to my Portfolio Website.
								</Typography>
							</Grid>
							<Grid item container justify='center'>
								<Button
									component={Link}
									to='/about'
									variant='contained'
									color='primary'>
									Read More!
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						container
						xs={12}
						sm={6}
						justify='center'
						alignItems='center'>
						<img
							className={classes.profilePicture}
							src={profile}
							alt='me and stevo'
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default HeroSection;
