import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

import { makeStyles } from "@material-ui/core/styles";

import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "calc(100vh - 200px)",
	},
	contactForm: {
		width: "100%",
		margin: "auto",
	},
	contactDetails: {
		margin: "0 auto",
		backgroundColor: "#F1F1F1",
	},
	informationDetails: {
		marginBottom: "15px",
	},
	contactIcons: {
		marginRight: "20px",
		fontSize: "30px",
	},
	test: {
		margin: "20px 0",
		backgroundColor: "blue",
	},
}));

const ContactPage = () => {
	const classes = useStyles();

	return (
		<Grid className={classes.container} container justify='center'>
			<Grid item container md={4} direction='column'>
				<Grid item className={classes.test}>
					<Typography align='center' variant='h2'>
						Contact Information
					</Typography>
				</Grid>
				<Grid
					className={classes.contactDetails}
					item
					container
					direction='column'
					md={10}>
					<Grid
						className={classes.informationDetails}
						item
						container
						alignItems='center'>
						<PhoneIphoneOutlinedIcon className={classes.contactIcons} />
						<Typography variant='h5'>+(353)-83-177-9545</Typography>
					</Grid>
					<Grid
						className={classes.informationDetails}
						item
						container
						alignItems='center'>
						<EmailOutlinedIcon className={classes.contactIcons} />
						<Typography variant='h5'>caolan.fanning@gmail.com</Typography>
					</Grid>
					<Grid
						className={classes.informationDetails}
						item
						container
						alignItems='flex-baseline'>
						<Grid item>
							<LocationOnOutlinedIcon className={classes.contactIcons} />
						</Grid>
						<Grid item>
							<Grid item container direction='column'>
								<Typography variant='h5'>Dunaras,</Typography>
								<Typography variant='h5'>Whitehall Road,</Typography>
								<Typography variant='h5'>Churchtown,</Typography>
								<Typography variant='h5'>Dublin 14.</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container md={4}>
				<Grid item container direction='column'>
					<Grid item className={classes.test}>
						<Typography align='center' variant='h2'>
							Leave a message!
						</Typography>
					</Grid>
					<Grid
						className={classes.contactForm}
						item
						container
						direction='column'
						md={10}
						spacing={1}>
						<Grid item>
							<TextField
								fullWidth
								id='name'
								required
								variant='outlined'
								label='Name'
							/>
						</Grid>
						<Grid item>
							<TextField
								fullWidth
								id='email'
								required
								variant='outlined'
								label='Email'
							/>
						</Grid>
						<Grid item>
							<TextField
								fullWidth
								id='phone'
								required
								variant='outlined'
								label='Phone'
							/>
						</Grid>
						<Grid item>
							<TextField
								fullWidth
								variant='outlined'
								required
								id='message'
								multiline
								rows={10}
								label='Message'
							/>
						</Grid>
						<Grid item>
							<Button
								fullWidth
								variant='contained'
								color='primary'
								disableElevation
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
