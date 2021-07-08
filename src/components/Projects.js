import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import proshop from "../images/ProshopMain.png";

const useStyles = makeStyles((theme) => ({
	container: {
		margin: "0px auto",
		backgroundColor: "#F3F3F3",
	},
	containerTwo: {
		margin: "50px 0",
	},
	cardPadding: {},
	card: {
		padding: "5px",
	},
	media: {
		display: "flex",
		margin: "0 auto",
	},
	button: {
		display: "flex",
		margin: "20px auto",
	},
}));

const Projects = () => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Grid className={classes.container} container md={10}>
			<Grid className={classes.container} container md={10}>
				<Grid
					className={classes.containerTwo}
					justify='center'
					item
					spacing={2}
					container>
					<Grid item container xs={12} sm={8} md={6}>
						<Card>
							<CardHeader align='center' title='ProShop E-commerce website' />
							<img
								className={classes.media}
								src={proshop}
								alt='proshop thumbnail'
							/>
							<CardContent>
								<Typography variant='body2'>
									E-commerce website built with 'MERN' stack technologies.
									Google Authentication and PayPal payment features just two of
									the many capabilities of this web application. Click below to
									see full project details!
								</Typography>
							</CardContent>
							<Button
								className={classes.button}
								color='primary'
								variant='contained'>
								View More
							</Button>
						</Card>
					</Grid>
					<Grid item container xs={12} sm={8} md={6}>
						<Card>
							<CardHeader align='center' title='ProShop E-commerce website' />
							<img
								className={classes.media}
								src={proshop}
								alt='proshop thumbnail'
							/>
							<CardContent>
								<Typography variant='body2'>
									E-commerce website built with 'MERN' stack technologies.
									Google Authentication and PayPal payment features just two of
									the many capabilities of this web application. Click below to
									see full project details!
								</Typography>
							</CardContent>
							<Button
								className={classes.button}
								color='primary'
								variant='contained'>
								View More
							</Button>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Projects;
