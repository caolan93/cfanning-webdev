import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Twitter } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	footer: {
		height: "100px",
		color: "#fff",
		backgroundColor: theme.palette.primary.main,
		[theme.breakpoints.down("md")]: {
			height: "70px",
		},
		[theme.breakpoints.down("sm")]: {
			height: "60px",
		},
	},
	socialIcons: {
		height: "45px",
		width: "45px",
	},
}));

const Footer = () => {
	const classes = useStyles();
	const theme = useTheme();

	return <Grid className={classes.footer} container justify='center'></Grid>;
};

export default Footer;
