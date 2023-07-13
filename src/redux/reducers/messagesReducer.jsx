let initialState = {
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
		'Enter new message',
		[
			{
				"id": 1,
				"text": '1',
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
		[
			{
				"id": 1,
				"text": '2',
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
		[
			{
				"id": 1,
				"text": '3',
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
		[
		]
	]
}

const messagesReducer = (state = initialState, action) => {
	let stateCopy = Object.assign({}, state)
	switch (action.type) {
		case 'ADD-NEW-MESSAGE':
			let message = {
				"id": stateCopy.messagesData[action.messagesId].length + 1,
				"text": action.value
			}
			document.querySelector(".messages__content").scrollTo({
				top: document.querySelector(".messages__content").scrollHeight,
				behavior: 'smooth',
			})

			stateCopy.messagesData[action.messagesId].push(message)
			return { ...state, messagesData: stateCopy.messagesData }
		default:
			return stateCopy
	}

}
export const messagesActionsCreators = {
	addNewMessage: (value, messagesId) => {
		return {
			"type": "ADD-NEW-MESSAGE",
			value,
			messagesId
		}
	},
}

export default messagesReducer