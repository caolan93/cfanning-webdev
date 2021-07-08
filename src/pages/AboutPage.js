import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import profilePicture from "../images/profile.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	profile: {
		objectFit: "contain",
		height: "500px",
	},
	aboutContainer: {
		margin: "20px",
	},
}));

const AboutPage = () => {
	const classes = useStyles();
	return (
		<Grid container md={10} style={{ margin: "0 auto" }}>
			<Grid
				className={classes.aboutContainer}
				container
				xs={12}
				justify='center'>
				<Grid item container spacing={3}>
					<Grid item>
						<Typography variant='subtitle1'>
							While obtaining my Mathematical Science Degree from TUDublin I
							attended a computer programming module based around the language
							C++. I quickly realised that I had a passion for Computer
							Programming and Software Development.
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='subtitle1'>
							After completing my degree in 2020, I took it upon myself to
							research, learn and study all web development and how it all
							worked. I found myself with a lot of time to do this as I was{" "}
							<i>blessed</i> with the pandemic and the first (of many)
							lockdowns.
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='subtitle1'>
							After taking the time to read and research online for the best
							practices to begin a journey as a self-taught web developer, I
							decided on beginning with HTML, CSS and JavaScript. These three
							technogolies together stood out to me as the much needed
							fundementals of web development.
						</Typography>
						<Typography variant='subtitle1'>
							I then began my journey learning and studying through a wide range
							of resources. Though many different articles, websites and forums
							stood helped me learn and grown as a web developer a few stood out
							more than most.
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='subtitle1'>
							The resources that I feel I gained the most knowledge and
							experience from were www.freecodecamp.org, www.youtube.com,
							www.udemy.com and www.stackoverflow.com.
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='subtitle1'>
							I feel it's necessary to point out that I firmly believe the
							combination of 'Youtube' and 'Stackoverflow' were the basis to the
							majority of my growth and in particular web development content
							creators channels on youtube such as 'Brad Travesty',
							'developedbyed', 'Sonny Sanga', 'JavaScriptMastery' and 'Steven
							Grider'.
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='subtitle1'>
							I have a great passion for web development and a strong will to
							learn and explore new technologies. I'm not afraid to make
							mistakes and learn from them and would love the opportunity to
							grow as a developer and as a person.
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='subtitle1'>
							Thank you for taking the time to read (if you made it this far).
							<br />
							Sincerely,
							<br />
							Caolan Fanning.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AboutPage;
