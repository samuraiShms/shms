import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/screens/App/App.jsx"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route Component={App} path='/*'></Route>
				<Route path="*" element={<p>Not found</p>}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router