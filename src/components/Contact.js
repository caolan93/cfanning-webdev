import React from "react";
import { motion } from "framer-motion";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const useStyles = makeStyles((theme) => ({
	container: {
		minHeight: "90vh",
	},
	header: {
		margin: "50px 0 20px 0",
		fontWeight: 700,
		textAlign: "center",
	},
	contactInfo: {
		margin: "auto",
		width: "100%",
	},
	contactDetailsContainer: {
		margin: "auto",
		height: "500px",
		maxWidth: "400px",
		display: "flex",
		flexDirection: "column",
		align: "left",
		justifyContent: "space-around",
	},
	contactDetails: {
		display: "flex",
		alignItems: "center",
	},
	contactIcons: {
		marginRight: "50px",
		fontSize: "32px",
		[theme.breakpoints.down("xs")]: {
			fontSize: "22px",
		},
	},
}));

const contactAnim = {
	hidden: {
		opacity: 0,
		scale: 0.1,
	},
	visible: {
		opacity: [0.2, 0.4, 0.6, 0.8, 2],
		scale: [0.4, 1],
		transition: { duration: 0.75 },
	},
};

const Contact = () => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("xs"));

	const contactArr = [
		{
			icon: PhoneIphoneOutlinedIcon,
			info: "+(353)83-177-9545",
		},
		{
			icon: EmailOutlinedIcon,
			info: "caolan.fanning@gmail.com",
		},
		{
			icon: LocationOnOutlinedIcon,
			info: `D14RC97`,
		},
	];

	return (
		<Grid container className={classes.container}>
			<Grid
				component={motion.div}
				variants={contactAnim}
				initial='hidden'
				animate='visible'
				item
				container
				style={{ margin: "50px auto" }}>
				<Grid item container md={6}>
					<div className={classes.contactInfo}>
						<Typography
							className={classes.header}
							variant={matches ? "h4" : "h3"}>
							GET IN TOUCH
						</Typography>
						<div className={classes.contactDetailsContainer}>
							{contactArr.map((contact) => (
								<div className={classes.contactDetails}>
									<contact.icon className={classes.contactIcons} />
									<Typography variant={matches ? "subtitle1" : "h6"}>
										{contact.info}
									</Typography>
								</div>
							))}
						</div>
					</div>
				</Grid>
				<Grid
					component={motion.div}
					variants={contactAnim}
					initial='hidden'
					animate='visible'
					item
					container
					md={6}>
					<div className={classes.contactInfo}>
						<Typography
							className={classes.header}
							variant={matches ? "h4" : "h3"}>
							SEND A MESSAGE!
						</Typography>
						<form className={classes.contactDetailsContainer}>
							<TextField variant='outlined' label='Name' />
							<TextField variant='outlined' label='Phone' />
							<TextField variant='outlined' label='Email' />
							<TextField
								variant='outlined'
								multiline
								rows={10}
								label='Message'
							/>
							<Button
								color='primary'
								variant='contained'
								endIcon={<SendIcon />}>
								Send
							</Button>
						</form>
					</div>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Contact;
