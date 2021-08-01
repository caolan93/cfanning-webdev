import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Carousel from "react-material-ui-carousel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	image: {
		height: "300px",
		width: "300px",
		objectFit: "contain",
	},
	imageMobile: {
		height: "200px",
		width: "200px",
		objectFit: "contain",
	},
	title: {
		fontWeight: 600,
	},
}));

const Photos = ({ images }) => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("xs"));

	return (
		<Grid container>
			{matches ? (
				<Grid
					item
					container
					justify='center'
					align='center'
					style={{ margin: "50px 0" }}>
					<Grid item xs={12}>
						<Carousel>
							{images.map((image) => (
								<>
									<a href={image.link} rel='noreferrer' target='_blank'>
										<img
											className={classes.image}
											key={image.key}
											src={image.img}
											alt={`${image.name} ${image.key}`}
										/>
									</a>

									<Typography className={classes.title} variant='subtitle1'>
										{image.name}
									</Typography>
								</>
							))}
						</Carousel>
					</Grid>
				</Grid>
			) : (
				<Grid container style={{ margin: "50px 0" }}>
					<Grid item container justify='center' align='center'>
						{images.map((image) => (
							<Grid item xs={12} md={6} lg={3}>
								<Grid
									component={Link}
									to={{ pathname: image.link }}
									rel='noreferrer'
									target='_blank'
									item
									xs={12}>
									<img
										className={classes.image}
										src={image.img}
										alt={`${image.name} ${image.key}`}
									/>
								</Grid>
								<Grid item xs={12}>
									<Typography className={classes.title} variant='subtitle1'>
										{image.name}
									</Typography>
								</Grid>
							</Grid>
						))}
					</Grid>
				</Grid>
			)}
		</Grid>
	);
};

export default Photos;
