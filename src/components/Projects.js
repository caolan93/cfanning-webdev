import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

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

const projectVariants = {
	hidden: {
		opacity: 0,
		x: -500,
	},
	visible: {
		opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
		transition: { duration: 1 },
		x: 0,
	},
};

const Projects = () => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Grid container>
			<Grid
				component={motion.div}
				variants={projectVariants}
				initial='hidden'
				animate='visible'
				item
				container
				className={classes.projectContainer}>
				<ProjectCard
					title='Proshop'
					image={proshoptn}
					pathname='https://proshop-mernapp.herokuapp.com/'
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
					pathname='https://proshop-mernapp.herokuapp.com/'
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
