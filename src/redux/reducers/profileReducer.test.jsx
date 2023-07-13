import profileReducer from "./profileReducer";

it('profileReducer', () => {
	// 1. test data
	let state = {

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
	}
	// 2. action
	const newState = profileReducer(state, { 'type': 'ADD-NEW-POST', name: 'name', text: 'loremTest' })

	// 3. Expection 
	expect(newState.postsData.length).toBe(4)
})
