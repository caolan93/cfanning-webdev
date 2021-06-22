import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import ComputerIcon from "@material-ui/icons/Computer";

const useStyles = makeStyles((theme) => ({
	menu: {
		display: "none",
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			marginLeft: "auto",
			color: "inherit",
		},
	},
	tabs: {
		marginLeft: "auto",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	link: {
		textDecoration: "none",
	},
	tab: {
		display: "flex",
	},
	container: {
		margin: "auto",
		justifyContent: "center",
		alignItems: "center",
	},
}));

const Navbar = () => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<AppBar
			className={classes.appbar}
			elevation={0}
			position='static'
			disableElevation>
			<Toolbar disableGutters>
				<Grid className={classes.container} container lg={10}>
					<Link to='/' className={classes.link}>
						<Typography variant='h4' color='secondary'>
							Portfolio
						</Typography>
					</Link>
					<Tabs className={classes.tabs}>
						<Link to='/projects' className={classes.link}>
							<Tab
								className={classes.tab}
								icon={<FolderOpenIcon />}
								color='#fff'
								label='Projects'
							/>
						</Link>
						<Link to='/technologies' className={classes.link}>
							<Tab
								className={classes.tab}
								icon={<ComputerIcon />}
								label='Technologies'
							/>
						</Link>
						<Link to='/about' className={classes.link}>
							<Tab
								className={classes.tab}
								icon={<InfoOutlinedIcon />}
								label='About'
							/>
						</Link>
						<Link to='/contact' className={classes.link}>
							<Tab
								className={classes.tab}
								icon={<ContactSupportOutlinedIcon />}
								label='Contact'
							/>
						</Link>
					</Tabs>
					<IconButton className={classes.menu}>
						<MenuIcon />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
