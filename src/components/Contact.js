import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { USER_ID, TEMPLATE_ID, SERVICE_ID } from "../emailjs";

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
		scale: 1.1,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 1 },
	},
};

const Contact = () => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("xs"));

	const [name, setName] = useState("");
	const [phone, setPhone] = useState(0);
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [emailSuccess, setEmailSuccess] = useState(false);
	const [emailFailure, setEmailFailure] = useState(false);

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

	const templateParams = {
		name,
		phone,
		email,
		setMessage,
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.send("SERVICE_ID", "TEMPLATE_ID", templateParams, "USER_ID").then(
			(result) => {
				setEmailSuccess(true);
				setEmailFailure(false);
			},
			(error) => {
				setEmailSuccess(false);
				setEmailFailure(true);
			}
		);
	};
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
							<TextField
								variant='outlined'
								label='Name'
								name={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<TextField
								variant='outlined'
								label='Phone'
								name={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
							<TextField
								variant='outlined'
								label='Email'
								name={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<TextField
								variant='outlined'
								multiline
								rows={10}
								label='Message'
								name={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
							<Button
								color='primary'
								variant='contained'
								type='submit'
								onClick={sendEmail}
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
