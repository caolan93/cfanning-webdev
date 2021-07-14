import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.primary.main,
		height: "150px",
	},
	socialIcons: {
		fontSize: "60px",
		padding: "10px",
		color: "#fff",
	},
	copyright: {
		color: "#fff",
		margin: "10px 0",
	},
}));

const socialsArr = [
	{
		icon: GitHubIcon,
		link: "https://github.com/caolan93",
	},
	{
		icon: LinkedInIcon,
		link: "https://www.linkedin.com/in/caolan-fanning-1a7229157/",
	},
	{
		icon: TwitterIcon,
		link: "https://twitter.com/CaolanFanning",
	},
];

const Footer = () => {
	const classes = useStyles();

	return (
		<Grid className={classes.footer} container>
			<Grid item container alignItems='center' justify='center'>
				{socialsArr.map((social) => (
					<Grid
						key={social.icon}
						item
						component={Link}
						to={{ pathname: social.link }}
						target='_blank'>
						<social.icon className={classes.socialIcons} />
					</Grid>
				))}
			</Grid>
			<Grid item container justify='center' alignItems='center'>
				<Grid item>
					<Typography className={classes.copyright} variant='body1'>
						All Rights Reserved &copy;
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Footer;
