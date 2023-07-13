import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';
import newsReducer from './reducers/newsReducer.jsx';
import usersReducer from './reducers/usersReducer.jsx';
import authReducer from "./reducers/authReducer";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./reducers/appReducer";
let reducers = combineReducers({
	profile: profileReducer,
	messages: messagesReducer,
	news: newsReducer,
	users: usersReducer,
	auth: authReducer,
	app: appReducer,
	form: formReducer
})

// const store = createStore(reducers, applyMiddleware(ThunkMiddleware)); // Без расширения (redux devtools)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(ThunkMiddleware)))

export default store;