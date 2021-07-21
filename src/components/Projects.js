import React from "react";
import ProjectCard from "./ProjectCard";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";

import proshoptn from "../images/proshopThumbnail.png";

const useStyles = makeStyles((theme) => ({
	projectContainer: {
		margin: "50px auto",
	},
}));

const Projects = () => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Grid container>
			<Grid item container className={classes.projectContainer}>
				<ProjectCard
					title='Proshop'
					image={proshoptn}
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
								quae aperiam facere harum minus quo nostrum quam iusto voluptate
								aspernatur, et numquam asperiores doloribus quidem error, alias
								necessitatibus consequatur. Perspiciatis dignissimos id error
								delectus voluptatem odio rerum odit a quasi enim, tempora ab
								animi reiciendis harum iusto laborum quaerat quia.'
				/>
				<ProjectCard
					title='Proshop'
					image={proshoptn}
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
								quae aperiam facere harum minus quo nostrum quam iusto voluptate
								aspernatur, et numquam asperiores doloribus quidem error, alias
								necessitatibus consequatur. Perspiciatis dignissimos id error
								delectus voluptatem odio rerum odit a quasi enim, tempora ab
								animi reiciendis harum iusto laborum quaerat quia.'
				/>
			</Grid>
		</Grid>
	);
};

export default Projects;
