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

const Technologies = () => {
	return <div></div>;
};

export default Technologies;
