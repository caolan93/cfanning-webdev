import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import Divider from "@material-ui/core/Divider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#0A090C",
		},
		secondary: {
			main: "#F0EDEE",
		},
	},
});

const useStyles = makeStyles((theme) => ({
	divider: {
		backgroundColor: "#F0EDEE",
	},
}));

function App() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Navbar />
				<Divider className={classes.divider} />
				<Switch>
					<Route exact path='/'>
						<HomePage />
					</Route>
					<Route exact path='/projects'>
						<ProjectsPage />
					</Route>
					<Route exact path='/technologies'>
						<TechnologiesPage />
					</Route>
					<Route exact path='/about'>
						<AboutPage />
					</Route>
					<Route exact path='/contact'>
						<ContactPage />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</ThemeProvider>
	);
}

export default App;
