import React, { useState } from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

const ProjectCard = ({ title, image, description, pathname }) => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));

	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
		console.log(pathname);
	};

	return (
		<Grid justify='center' item container xs={12} md={6}>
			<div className={classes.paper}>
				<Card
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
					<Collapse in={expanded} timeout='auto' unmountOnExit>
						<Typography variant='subtitle1' align='center'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Cupiditate quae beatae, consectetur repellat a laboriosam nihil
							aspernatur, dolor earum sapiente illo. Culpa animi quibusdam
							necessitatibus corporis optio sint libero aperiam? Labore, sunt
							rem quos iste magni atque fugiat provident temporibus dolor, culpa
							enim quasi deleniti asperiores id delectus similique pariatur?
						</Typography>
					</Collapse>
					<div className={classes.btn}>
						<Button
							component={Link}
							to={{ pathname: `${pathname}` }}
							target='_blank'
							variant='contained'
							color='primary'>
							View Project
						</Button>

						<IconButton onClick={handleExpandClick}>
							{expanded ? (
								<ExpandMoreIcon style={{ transform: "rotate(180deg)" }} />
							) : (
								<ExpandMoreIcon />
							)}
						</IconButton>
					</div>
				</Card>
			</div>
		</Grid>
	);
};

export default ProjectCard;
