import { Title } from "@material-ui/icons";
import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
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
	btn: {
		display: "flex",
		justifyContent: "center",
		marginTop: "20px",
	},
}));

const ProjectCard = ({ title, image, description }) => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Grid justify='center' item container xs={12} md={6}>
			<div className={classes.paper}>
				<Paper
					style={{
						height: "100%",
						padding: "20px",
					}}>
					<Typography align='center' variant='h5'>
						{title}
					</Typography>
					<img className={classes.image} src={image} alt='proshop thumbnail' />
					<Typography align='center' variant='subtitle1'>
						{description}
					</Typography>
					<div className={classes.btn}>
						<Button
							component={Link}
							to='/projects'
							variant='contained'
							color='primary'>
							View Project
						</Button>
					</div>
				</Paper>
			</div>
		</Grid>
	);
};

export default ProjectCard;
