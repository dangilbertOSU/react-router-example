/* Router stuff */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DataComponent from "./components/DataComponent/DataComponent";

const data = {
	ceramics: {
		information: {
			name: "ceramics",
			value: "ceramic stuff",
		},
	},
	woodworking: {
		information: {
			name: "woodworking",
			value: "woodworking stuff",
		},
	},
};

const page_links = ["ceramics", "woodworking"];

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							{page_links.map((page_link) => {
								return (
									<li key={page_link}>
										<Link to={`/${page_link}`}>{page_link}</Link>
									</li>
								);
							})}
						</ul>
					</nav>

					<Switch>
						<Route exact path="/">
							<p>Home</p>
						</Route>
						{/* This could also just be looped to create routes and not hard coded */}
						<Route exact path="/ceramics">
							<DataComponent data={data["ceramics"].information} />
						</Route>
						<Route exact path="/woodworking">
							<DataComponent data={data["woodworking"].information} />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
