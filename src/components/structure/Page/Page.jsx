import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import withLazy from "../../../HighOrderComponents/withLazy.jsx";
const ProfileContainer = lazy(() => import('../../ui/Profile/ProfileContainer.jsx'))

const NewsContainer = lazy(() => import('./../../ui/News/NewsContainer.jsx'))

const UsersContainer = lazy(() => import('../../ui/Users/UsersContainer.jsx'))

const MessagesContainer = lazy(() => import('./../../ui/Messages/MessagesContainer'))

const Login = lazy(() => import('../../ui/Login/Login.jsx'))
const Page = () => {
	return (
		<main className="page">
			<div className='page__container _container'>
				<div className="page__body">
					<Routes>
						<Route path="/profile/:userId?" Component={withLazy(ProfileContainer)}></Route>
						<Route path="/messages/:messagesId?" Component={withLazy(MessagesContainer)}></Route>
						<Route path="/news/*" Component={withLazy(NewsContainer)}></Route>
						<Route path="/users/*" Component={withLazy(UsersContainer)} ></Route>
						<Route path="/login/*" Component={withLazy(Login)} ></Route>
					</Routes>
				</div>
			</div>
		</main>
	)
}

export default Page;