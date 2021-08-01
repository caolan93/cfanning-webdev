import React, { useState } from "react";
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

	const [open, setOpen] = useState(false);

	const [value, setValue] = useState(0);

	const handleDrawerChange = () => {
		setOpen(!open);
	};

	return (
		<>
			<ElevationScroll>
				<AppBar className={classes.appbar} position='sticky'>
					<Toolbar>
						<Typography
							className={classes.logo}
							component={Link}
							onClick={() => setValue(0)}
							to='/'
							variant='h5'>
							Caolan Fanning
						</Typography>
						{matches ? (
							<IconButton
								className={classes.menuIcon}
								onClick={handleDrawerChange}>
								{open ? <CloseIcon /> : <MenuIcon />}
							</IconButton>
						) : (
							<Tabs value={value} className={classes.menuIcon}>
								<Tab
									className={classes.tabs}
									component={Link}
									onClick={() => setValue(0)}
									to='/'
									label='Home'
								/>
								<Tab
									className={classes.tabs}
									component={Link}
									onClick={() => setValue(1)}
									to='/about'
									label='About'
								/>
								<Tab
									className={classes.tabs}
									component={Link}
									onClick={() => setValue(2)}
									to='/contact'
									label='Contact'
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
						}}
						button>
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
						}}
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
						}}
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
