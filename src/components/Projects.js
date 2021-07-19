import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import proshoptn from "../images/proshopThumbnail.png";

const useStyles = makeStyles((theme) => ({
	projectContainer: {
		margin: "50px auto",
	},
	image: {
		objectFit: "contain",
		height: "300px",
		width: "300px",
		[theme.breakpoints.down("sm")]: {
			height: "200px",
			width: "200px",
		},
		margin: "10px auto",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	paper: {
		margin: "20px",
		[theme.breakpoints.down("sm")]: {
			margin: "20px 0",
		},
		maxWidth: "500px",
		width: "100%",
	},
}));

const Projects = () => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Grid container>
			<Grid item container className={classes.projectContainer}>
				<Grid justify='center' item container xs={12} md={6}>
					<div className={classes.paper}>
						<Paper style={{ height: "100%", padding: "20px" }}>
							<Typography align='center' variant='h5'>
								ProShop
							</Typography>
							<img
								className={classes.image}
								src={proshoptn}
								alt='proshop thumbnail'
							/>
							<Typography align='center' variant='subtitle1'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
								quae aperiam facere harum minus quo nostrum quam iusto voluptate
								aspernatur, et numquam asperiores doloribus quidem error, alias
								necessitatibus consequatur. Perspiciatis dignissimos id error
								delectus voluptatem odio rerum odit a quasi enim, tempora ab
								animi reiciendis harum iusto laborum quaerat quia.
							</Typography>
						</Paper>
					</div>
				</Grid>
				<Grid justify='center' item container xs={12} md={6}>
					<div className={classes.paper}>
						<Paper style={{ height: "100%", padding: "20px" }}>
							<Typography align='center' variant='h5'>
								ProShop
							</Typography>
							<img
								className={classes.image}
								src={proshoptn}
								alt='proshop thumbnail'
							/>
							<Typography align='center' variant='subtitle1'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
								quae aperiam facere harum minus quo nostrum quam iusto voluptate
								aspernatur, et numquam asperiores doloribus quidem error, alias
								necessitatibus consequatur. Perspiciatis dignissimos id error
								delectus voluptatem odio rerum odit a quasi enim, tempora ab
								animi reiciendis harum iusto laborum quaerat quia.
							</Typography>
						</Paper>
					</div>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Projects;
