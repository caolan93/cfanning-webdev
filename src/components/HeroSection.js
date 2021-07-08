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
		height: "auto",
		margin: "0px auto",
		backgroundColor: "#F3F3F3",
	},
	containerTwo: {
		margin: "50px 0",
	},
	profilePicture: {
		objectFit: "contain",
		height: "500px",
		[theme.breakpoints.down("md")]: {
			height: "350px",
		},
	},
	welcome: {
		[theme.breakpoints.down("md")]: {
			marginBottom: "20px",
		},
	},
}));

const HeroSection = () => {
	const classes = useStyles();

	return (
		<>
			<Grid className={classes.container} container md={10}>
				<Grid container className={classes.container} md={10}>
					<Grid container className={classes.containerTwo}>
						<Grid
							item
							container
							xs={12}
							sm={6}
							justify='center'
							direction='column'>
							<Grid className={classes.welcome} container justify='center'>
								<Grid
									style={{ marginBottom: "20px" }}
									item
									container
									justify='center'>
									<Typography variant='h3'>Welcome!</Typography>
								</Grid>
								<Grid
									style={{ marginBottom: "20px" }}
									item
									container
									justify='center'>
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
		</>
	);
};

export default HeroSection;
