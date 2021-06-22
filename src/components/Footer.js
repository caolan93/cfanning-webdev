import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	appbar: {
		top: "auto",
		bottom: "0",
		color: theme.palette.secondary.main,
	},
	menu: {
		display: "none",
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			marginLeft: "auto",
		},
	},
	tabs: {
		marginLeft: "auto",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	link: {
		textDecoration: "none",
		color: theme.palette.secondary.main,
	},
	tab: {
		display: "flex",
	},
	container: {
		margin: "0 auto",
		backgroundColor: theme.palette.secondary,
	},
}));

const Footer = () => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<AppBar
			className={classes.appbar}
			elevation={0}
			position='fixed'
			disableElevation>
			<Toolbar disableGutters>
				<Grid
					className={classes.container}
					container
					lg={10}
					spacing={2}></Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Footer;
