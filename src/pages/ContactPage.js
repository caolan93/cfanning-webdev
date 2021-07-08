import React, { useState } from "react";
import emailjs from "emailjs-com";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Paper from "@material-ui/core/Paper";
import { serviceId, templateId, userId } from "../email";

import { makeStyles } from "@material-ui/core/styles";

import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "#f3f3f3",
		height: " 800px",
		margin: "auto",
	},
	contactContainer: {
		margin: "20px",
		backgroundColor: "#fff",
	},
	container1: { backgroundColor: "red" },
	container2: { backgroundColor: "blue" },
}));

const ContactPage = () => {
	const classes = useStyles();

	const [sentEmail, setSentEmail] = useState(false);
	const [resendEmail, setResendEmail] = useState(false);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(serviceId, templateId, e.target, userId).then(
			(result) => {
				setSentEmail(true);
				setResendEmail(false);
				setFirstName("");
				setLastName("");
				setEmail("");
				setPhone("");
				setMessage("");
			},
			(error) => {
				setResendEmail(true);
			}
		);
	};
	return (
		<Grid className={classes.container} container xs={12} md={10}>
			<Grid container style={{ margin: "50px 0" }}>
				<Grid item container direction='column' xs={12} md={6}>
					<Grid
						item
						xs={12}
						container
						style={{ padding: "0 10px" }}
						spacing={1}>
						<Grid item xs={12}>
							<Typography align='center' variant='h4'>
								Get In Touch!
							</Typography>
						</Grid>

						<Grid item container xs={12}>
							<Grid item xs={3}>
								<PhoneIphoneOutlinedIcon />
							</Grid>
							<Grid item={9}>
								<Typography variant='h6'>+(353)83-177-9545</Typography>
							</Grid>
						</Grid>
						<Grid item container xs={12}>
							<Grid item xs={3}>
								<EmailOutlinedIcon />
							</Grid>
							<Grid item={9}>
								<Typography variant='h6'>caolan.fanning@gmail.com</Typography>
							</Grid>
						</Grid>
						<Grid item container xs={12}>
							<Grid item xs={3}>
								<LocationOnOutlinedIcon />
							</Grid>
							<Grid item={9}>
								<Typography variant='h6'>
									Dúnáras, <br />
									Whitehall Road, <br /> Churchtown <br /> Dublin 14.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item container direction='column' xs={12} md={6}>
					{sentEmail ? (
						<Grid
							item
							container
							direction='column'
							justify='center'
							alignItems='center'
							xs={12}>
							<Grid item>
								<Typography align='center' variant='h4'>
									Message Sent!
								</Typography>
							</Grid>
							<Grid item>
								<Typography align='center' variant='h6'>
									Thank you for the message! <br /> I will respond as soon as I
									see it!
								</Typography>
							</Grid>
						</Grid>
					) : (
						<form onSubmit={sendEmail}>
							<Grid item container style={{ padding: "0 10px" }} spacing={1}>
								<Grid item xs={12}>
									<Typography align='center' variant='h4'>
										{resendEmail
											? "Message Failed. Try Again!"
											: "Send A Message!"}
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										label='First Name'
										name='firstName'
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
										variant='outlined'
										fullWidth
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										label='Last Name'
										name='lastName'
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
										variant='outlined'
										fullWidth
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										label='Phone'
										name='phone'
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										variant='outlined'
										fullWidth
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										label='Email'
										name='email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										variant='outlined'
										fullWidth
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										label='Message'
										name='message'
										multiline
										rows={8}
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										variant='outlined'
										fullWidth
									/>
								</Grid>
								<Grid item xs={12}>
									<Button
										type='submit'
										fullWidth
										variant='contained'
										color='primary'
										endIcon={<SendIcon />}>
										Send
									</Button>
								</Grid>
							</Grid>
						</form>
					)}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ContactPage;
