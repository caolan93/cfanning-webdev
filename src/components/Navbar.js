import React, { useState } from "react";
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
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const useStyles = makeStyles((theme) => ({
	navigation: {
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	menuButton: {
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	link: {
		color: "inherit",
		textDecoration: "none",
	},
}));

const Navbar = () => {
	const classes = useStyles();
	const theme = useTheme();

	const [drawer, setDrawer] = useState(false);
	const [selectedTab, setSelectedTab] = useState(0);

	const handleDrawerOpen = () => {
		setDrawer(!drawer);
	};

	const handleChange = (e, newValue) => {
		setSelectedTab(newValue);
	};

	console.log(drawer);
	return (
		<>
			<AppBar position='static'>
				<Toolbar>
					<Grid container alignItems='center' justify='space-between'>
						<Grid item>
							<Link className={classes.link} to='/'>
								<Typography variant='h5'>Caolan Fanning WebDev</Typography>
							</Link>
						</Grid>
						<Grid className={classes.navigation} item>
							<Grid container spacing={3}>
								<Tabs value={selectedTab} onChange={handleChange}>
									<Tab component={Link} to='/' label='Home' />
									<Tab component={Link} to='/projects' label='Projects' />
									<Tab component={Link} to='/about' label='About' />
									<Tab component={Link} to='/contact' label='Contact' />
								</Tabs>
							</Grid>
						</Grid>
						<Grid className={classes.menuButton} item>
							<MenuIcon onClick={handleDrawerOpen} />
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
