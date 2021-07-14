import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "rgba(30,30,30)",
		},
		secondary: {
			main: "#BB86FC",
		},
	},
	typography: {
		fontFamily: `'Poppins', sans-serif`,
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Homepage />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
