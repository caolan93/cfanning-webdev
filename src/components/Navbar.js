import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FolderRoundedIcon from "@material-ui/icons/FolderRounded";
import ImportContactsRoundedIcon from "@material-ui/icons/ImportContactsRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import CloseIcon from "@material-ui/icons/Close";

function ElevationScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 5 : 0,
	});
}

const useStyles = makeStyles((theme) => ({
	appbar: {
		zIndex: theme.zIndex.modal + 1,
	},
	logo: {
		textDecoration: "none",
		color: "#fff",
	},
	menuIcon: {
		fontWeight: 700,
		color: "#fff",
		marginLeft: "auto",
	},
	tabs: {
		borderRadius: "3px",
	},
	drawer: {
		[theme.breakpoints.down("xl")]: {
			marginTop: "64px",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "56px",
			width: "50%",
		},
		backgroundColor: theme.palette.primary.main,
	},
	drawerItem: {
		color: "#fff",
	},
	drawerIcon: {
		padding: "3px",
		backgroundColor: "#fff",
		color: theme.palette.primary.main,
		borderRadius: "50%",
	},
	divider: {
		backgroundColor: "#fff",
	},
}));

const Navbar = () => {
	const theme = useTheme();
	const classes = useStyles();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));

	const [value, setValue] = useState(0);
	const [open, setOpen] = useState(false);

	const handleDrawerChange = () => {
		setOpen(!open);
	};

	const handleChange = (e, newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		switch (window.location.pathname) {
			case "/":
				if (value !== 0) {
					setValue(0);
				}
				break;
			case "/about":
				if (value !== 1) {
					setValue(1);
				}
				break;
			case "/contact":
				if (value !== 2) {
					setValue(2);
				}
				break;
			default:
				break;
		}
	}, [window.location.pathname, value]);

	return (
		<>
			<ElevationScroll>
				<AppBar className={classes.appbar} position='sticky'>
					<Toolbar>
						<Typography
							className={classes.logo}
							component={Link}
							to='/'
							variant='h5'
							onClick={() => setValue(0)}>
							Caolan Fanning
						</Typography>
						{matches ? (
							<IconButton
								className={classes.menuIcon}
								onClick={handleDrawerChange}>
								{open ? <CloseIcon /> : <MenuIcon />}
							</IconButton>
						) : (
							<Tabs
								value={value}
								onChange={handleChange}
								className={classes.menuIcon}>
								<Tab
									className={classes.tabs}
									component={Link}
									to='/'
									label='Home'
									index={0}
								/>
								<Tab
									className={classes.tabs}
									component={Link}
									to='/about'
									label='About'
									index={1}
								/>
								<Tab
									className={classes.tabs}
									component={Link}
									to='/contact'
									label='Contact'
									index={2}
								/>
							</Tabs>
						)}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<SwipeableDrawer
				classes={{ paper: classes.drawer }}
				open={open}
				onOpen={() => setOpen(true)}
				onClose={() => setOpen(false)}>
				<List disablePadding component='nav'>
					<ListItem
						component={Link}
						to='/'
						onClick={() => {
							setOpen(false);
							setValue(0);
						}}
						button
						selected={value === 0}>
						<ListItemIcon>
							<HomeRoundedIcon className={classes.drawerIcon} />
						</ListItemIcon>
						<ListItemText className={classes.drawerItem} primary='Home' />
					</ListItem>

					<Divider className={classes.divider} />
					<ListItem
						component={Link}
						to='/about'
						onClick={() => {
							setOpen(false);
							setValue(1);
						}}
						selected={value === 1}
						button>
						<ListItemIcon>
							<AccountBoxRoundedIcon className={classes.drawerIcon} />
						</ListItemIcon>
						<ListItemText className={classes.drawerItem} primary='About' />
					</ListItem>
					<Divider className={classes.divider} />
					<ListItem
						component={Link}
						to='/contact'
						onClick={() => {
							setOpen(false);
							setValue(2);
						}}
						selected={value === 2}
						button>
						<ListItemIcon>
							<ImportContactsRoundedIcon className={classes.drawerIcon} />
						</ListItemIcon>
						<ListItemText className={classes.drawerItem} primary='Contact' />
					</ListItem>
					<Divider className={classes.divider} />
				</List>
			</SwipeableDrawer>
		</>
	);
};

export default Navbar;
