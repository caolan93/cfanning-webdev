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
		height: "90vh",
		margin: "auto",
	},
	contactContainer: {
		margin: "20px",
		backgroundColor: "#fff",
	},
	paper: {},
}));

const ContactPage = () => {
	const classes = useStyles();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	return (
		<Grid className={classes.container} container md={10}>
			<Grid container md={12}>
				<Grid
					item
					container
					alignItems='center'
					justify='center'
					style={{ margin: "auto" }}
					sm={10}
					lg={8}
					xl={6}>
					<Grid item container spacing={1}>
						<Grid item xs={12}>
							<Typography align='center' variant='h4'>
								Get In Touch!
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								value={firstName}
								onChange={(e) => (setFirstName = e.target.value)}
								fullWidth
								label='First Name'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								value={lastName}
								onChange={(e) => (setLastName = e.target.value)}
								fullWidth
								label='Last Name'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								value={email}
								onChange={(e) => (setEmail = e.target.value)}
								fullWidth
								label='Email'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								value={phone}
								onChange={(e) => (setPhone = e.target.value)}
								fullWidth
								label='Phone'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								value={message}
								onChange={(e) => (setMessage = e.target.value)}
								fullWidth
								multiline
								rows={10}
								label='Message'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								type='submit'
								color='primary'
								fullWidth
								multiline
								rows={10}
								endIcon={<SendIcon />}
								variant='contained'>
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
