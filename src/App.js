import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Divider from "@material-ui/core/Divider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core";

const theme = createMuiTheme({});

const useStyles = makeStyles((theme) => ({
	palette: {
		primary: {
			main: "rgba(30,30,30)",
		},
	},
}));

function App() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<HomePage />
					</Route>
					<Route exact path='/projects'>
						<ProjectsPage />
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
