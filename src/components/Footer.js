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
		backgroundColor: theme.palette.primary.main,
		color: "#fff",
	},
	gridContainer: {
		margin: "20px auto",
	},
	socialIcons: {
		height: "45px",
		width: "45px",
	},
}));

const Footer = () => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Grid className={classes.footer} container xs={12}>
			<Grid
				className={classes.gridContainer}
				item
				container
				justify='center'
				xs={12}
				md={10}
				spacing={2}>
				<Grid item container justify='center' xs={12} spacing={2}>
					<Grid item>
						<GitHubIcon className={classes.socialIcons} />
					</Grid>
					<Grid item>
						<Twitter className={classes.socialIcons} />
					</Grid>
					<Grid item>
						<LinkedInIcon className={classes.socialIcons} />
					</Grid>
				</Grid>
				<Grid item container justify='center' xs={12}>
					<Typography variant='body1'>All Rights Reserved &copy;</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Footer;

{
	/* <Grid item container>

</Grid>
<Grid item container>
<Grid item alignItems='center'>
	<EmailOutlinedIcon />
</Grid>
<Grid item alignItems='baseline'>
	<Grid item container direction='column'>
		<Grid item>
			<Typography variant='subtitle'>Dunaras,</Typography>
		</Grid>
		<Grid item>
			<Typography variant='subtitle'>Whitehall Road,</Typography>
		</Grid>
		<Grid item>
			<Typography variant='subtitle'>Churchtown,</Typography>
		</Grid>
		<Grid item>
			<Typography variant='subtitle'>Dublin 14</Typography>
		</Grid>
	</Grid>
</Grid>
</Grid>
<Grid item container>
<Grid item alignItems='center'>
	<LocationOnOutlinedIcon />
</Grid>
<Grid item>
	<Typography variant='subtitle'>caolan.fanning@gmail.com</Typography>
</Grid>
</Grid> */
}
