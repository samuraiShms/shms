import profileReducer from './reducers/profileReducer.jsx';
import messagesReducer from './reducers/messagesReducer.jsx'
let store = {
	_rerenderTree: '',
	_state: {
		profile: {
			postsData: [
				{
					"id": 1,
					"From": 'Kirill',
					"Message": 'Lorem'
				},
				{
					"id": 2,
					"From": 'Kirill2',
					"Message": 'Lorem'
				},
				{
					"id": 3,
					"From": 'Kirill3',
					"Message": 'Lorem'
				},
			],

			"newPostName": '',
			"newPostText": '',

		},
		messages: {
			interlocutorsData: [
				{
					"id": 1,
					"text": 'Kirill',
				},
				{
					"id": 2,
					"text": 'Viktor',
				},
				{
					"id": 3,
					"text": 'Name',
				},
				{
					"id": 4,
					"text": 'Dmitry',
				},
			],
			messagesData: [
				{
					"id": 1,
					"text": 'lorem ipsum',
				},
				{
					"id": 2,
					"text": 'lorem ipsum',
				},
				{
					"id": 3,
					"text": 'lorem ipsum',
				},
				{
					"id": 4,
					"text": 'lorem ipsum',
				},
			],
			"newMessageText": '',
		}
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._rerenderTree = observer
	},
	dispatch(action) {
		this._state.profile = profileReducer(this._state.profile, action)
		this._state.messages = messagesReducer(this._state.messages, action)
		this._rerenderTree()
	}
}


export default store;





// Также у меня небольшой недочёт
// Нужно rerenderTree занести в store
//  Ок, можно сделать, но т.к. наши функции, которые
// вызывают rerenderTree , могут вызывать только так: this.rerenderTree
// Но так нельзя, т.к. наши функции не в store, и поэтому в this нету rerenderTree, поэтому
// В следующий раз надо учесть это


// P.S я пофисксил с помощью dispatch
