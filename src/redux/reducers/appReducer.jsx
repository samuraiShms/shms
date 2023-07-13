import { getDataLoginThunkCreator } from "./authReducer";

const INITIALIZE_APP = 'INITIALIZE_APP';
const initialState = {
	initilize: false
}

const appReducer = (state = initialState, action) => {
	const stateCopy = Object.assign({}, state)
	switch (action.type) {
		case INITIALIZE_APP:
			return { ...state, initilize: true }
		default:
			return stateCopy
	}
}
const initializeSuccess = () => { return { 'type': INITIALIZE_APP } }
export const initilizingApp = () => {
	return (dispatch) => {
		let loginData = dispatch(getDataLoginThunkCreator())
		Promise.all([
			loginData
		]).then(() => {
			dispatch(initializeSuccess())
		})
	}
}

export default appReducer