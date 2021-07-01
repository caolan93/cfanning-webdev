import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "#f3f3f3",
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

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

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
					<Grid item container style={{ padding: "0 10px" }} spacing={1}>
						<Grid item xs={12}>
							<Typography align='center' variant='h4'>
								Send A Message!
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								label='First Name'
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								variant='outlined'
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								label='Last Name'
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								variant='outlined'
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label='Phone'
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								variant='outlined'
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label='Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								variant='outlined'
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label='Message'
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
								fullWidth
								variant='contained'
								color='primary'
								endIcon={<SendIcon />}>
								Send
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ContactPage;
