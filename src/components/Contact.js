import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const useStyles = makeStyles((theme) => ({
	container: {
		minHeight: "600px",
		margin: "auto",
	},
	contactInfo: {
		backgroundColor: "red",
		minHeight: "500px",
		maxWidth: "400px",
	},
}));

const Contact = () => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Grid container className={classes.container}>
			<Grid className={classes.contactInfo} item container md={6}>
				<Grid item>
					<Typography variant='h3'>CONTACT INFO</Typography>
				</Grid>
				<Grid item container alignItems='center' justify='space-between'>
					<Grid item>
						<PhoneIphoneOutlinedIcon />
					</Grid>
					<Grid item>
						<Typography variant='h6'>083-177-9545</Typography>
					</Grid>
				</Grid>
				<Grid item container alignItems='center' justify='space-between'>
					<Grid item>
						<EmailOutlinedIcon />
					</Grid>
					<Grid item>
						<Typography variant='h6'>caolan.fanning@gmail.com</Typography>
					</Grid>
				</Grid>
				<Grid item container alignItems='center' justify='space-between'>
					<Grid item>
						<LocationOnOutlinedIcon />
					</Grid>
					<Grid item>
						<Typography variant='h6'>
							Dúnaras, <br /> Whitehall Road, <br /> Churchtown, <br /> Dublin
							14.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container md={6}>
				<Typography variant='h3'>Get In Touch!</Typography>
			</Grid>
		</Grid>
	);
};

export default Contact;
