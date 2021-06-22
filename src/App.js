import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

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

function App() {
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
