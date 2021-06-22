import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const useStyles = makeStyles((theme) => ({
	grid: {
		margin: "0 auto",
		height: "calc(100vh - 136px)",
		backgroundColor: theme.palette.primary.main,
	},
	informationGrid: {
		margin: "0 auto",
		backgroundColor: "pink",
		color: theme.palette.secondary.main,
	},
	getInTouch: {
		margin: "20px",
		color: theme.palette.secondary.main,
	},
	detailsGrid: {
		margin: "0 auto",
		color: theme.palette.secondary.main,
	},
	contactGrid: {
		backgroundColor: "blue",
		color: theme.palette.secondary.main,
	},
	icons: {
		fontSize: "2.125rem",
		color: theme.palette.secondary.main,
	},
}));

const ContactPage = () => {
	const classes = useStyles();

	return (
		<Grid className={classes.grid} container lg={10} xl={10}>
			<Grid item lg={12}>
				<Typography className={classes.getInTouch} variant='h3' align='center'>
					Get In Touch!
				</Typography>
			</Grid>
			<Grid item container lg={6}>
				<Grid className={classes.detailsGrid} item container md={8} spacing={2}>
					<Grid item md={3}>
						<PhoneIphoneOutlinedIcon className={classes.icons} />
					</Grid>
					<Grid item md={9}>
						<Typography variant='h5'>+(353)-83-177-9545</Typography>
					</Grid>
					<Grid item md={3}>
						<EmailOutlinedIcon className={classes.icons} />
					</Grid>
					<Grid item md={9}>
						<Typography variant='h5'>caolan.fanning@gmail.com</Typography>
					</Grid>
					<Grid item md={3}>
						<LocationOnOutlinedIcon className={classes.icons} />
					</Grid>
					<Grid item md={9}>
						<Grid item>
							<Typography variant='h5'>Dúnáras,</Typography>
							<Typography variant='h5'>Whitehall Road,</Typography>
							<Typography variant='h5'>Churchtown Dublin 14.</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container lg={6}>
				<Grid item direction='column' container lg={10} justify='space-around'>
					<FormControl></FormControl>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ContactPage;
