let initialState = {
	newsData: [
		{
			"id": 1,
			"title": "new",
			"text": 'Lorem',
			"date": '10.05.23',
		},
		{
			"id": 2,
			"title": "new",
			"text": 'Lorem',
			"date": '10.05.23',
		},
		{
			"id": 3,
			"title": "new",
			"text": 'Lorem',
			"date": '10.05.23',
		},
	],
}

const newsReducer = (state = initialState, action) => {
	let stateCopy = Object.assign({}, state)
	switch (action.type) {
		case 'ADD-NEW':
			let newsItem = {
				"id": stateCopy.newsData.length + 1,
				"title": action.title,
				"text": action.text,
				"date": "10.05.22"
			}
			if (newsItem.title && newsItem.text) {
				if (newsItem.title.length > 0 && newsItem.text.length > 0) {
					stateCopy.newsData.push(newsItem);
				}
			}
			return { ...state, newsData: stateCopy.newsData }
		default:
			return stateCopy;
	}

}

export default newsReducer


export const newsActionCreators = {
	addItem: (title, text) => {
		return {
			'type': 'ADD-NEW',
			title,
			text
		}
	},
}