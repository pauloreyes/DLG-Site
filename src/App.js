import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import Main from "./components/Main";
import { ContextProvider } from "./components/SiteContexts";
import PageNotFound from "./components/PageNotFound";
import WhoWeAre from "./components/WhoWeAre";
import Test from "./components/Test";
import TalkToUs from "./components/TalkToUs";

function App() {
	return (
		<div className='App'>
			<Router>
				<ContextProvider>
					<Routes>
						<Route exact path='/' element={<Main />} />
						<Route path='/whoweare' element={<WhoWeAre />} />
						<Route path='/talktous' element={<TalkToUs />} />
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</ContextProvider>
			</Router>
		</div>
	);
}

export default App;
