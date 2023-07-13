import { createSelector } from "reselect";
import { followAPI, usersAPI } from "../../api/api";

let initialState = {
	usersData: [],
	pageSize: 2,
	pageSizeShowMore: 2,
	totalCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
	left: 0,
	right: 10
}

const usersReducer = (state = initialState, action) => {
	let stateCopy = Object.assign({}, state);
	switch (action.type) {
		case 'FOLLOW':
			stateCopy.usersData.forEach(el => {
				if (el.id === action.userId) {
					el.followed = true
				}
			})
			return { ...state, usersData: stateCopy.usersData }
		case 'UNFOLLOW':
			stateCopy.usersData.forEach(el => {
				if (el.id === action.userId) {
					el.followed = false
				}
			})
			return { ...state, usersData: stateCopy.usersData }
		case 'SHOW-MORE':
			return { ...state, pageSizeShowMore: action.users.length, usersData: [...action.users] }
		case 'SET-USERS':
			return { ...state, usersData: [...action.users] }
		case 'SET-CURRENT-PAGE':
			return { ...state, currentPage: action.id }
		case 'SET-TOTAL-COUNT':
			return { ...state, totalCount: action.count }
		case 'TOGGLE-IFFETCHING':
			return { ...state, isFetching: action.isFetching }
		case 'TOGGLE-FOLLOWING-IN-PROGRESS':
			return { ...state, followingInProgress: [action.id, action.status] }
		case 'SET-LEFT':
			if (action.status) {
				return { ...state, left: action.quantity + 10 }
			} else {
				return { ...state, left: action.quantity - 10 }
			}
		case 'SET-RIGHT':
			if (action.status) {
				return { ...state, right: action.quantity + 10 }
			} else {
				return { ...state, right: action.quantity - 10 }
			}
		default:
			return stateCopy
	}
}

export default usersReducer

// action creators
export const toggleFollowing = (id, status) => {
	return {
		'type': 'TOGGLE-FOLLOWING-IN-PROGRESS',
		'id': id,
		'status': status
	}
}
export const setTotalCount = (count) => {
	return {
		'type': "SET-TOTAL-COUNT",
		'count': count
	}
}


export const toggleIsFetching = (isFetching) => {
	return {
		'type': 'TOGGLE-IFFETCHING',
		'isFetching': isFetching
	}
}
export const setUsers = (users) => {
	return {
		'type': 'SET-USERS',
		'users': users
	}
}
export const follow = (userId) => {
	return {
		'type': 'FOLLOW',
		'userId': userId,
	}
}
export const unfollow = (userId) => {
	return {
		'type': 'UNFOLLOW',
		'userId': userId,
	}
}
export const showMore = (users) => {
	return {
		'type': 'SHOW-MORE',
		users
	}
}
export const setCurrentPage = (id) => {
	return {
		'type': 'SET-CURRENT-PAGE',
		'id': id,
	}
}

export const setRight = (quantity, status) => {
	return {
		'type': 'SET-RIGHT',
		quantity,
		status
	}
}

export const setLeft = (quantity, status) => {
	return {
		'type': 'SET-LEFT',
		quantity,
		status
	}
}


// thunks
export const getUsersThunkCreator = (pageNumber = 1, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true))
		usersAPI.getUsers(pageNumber, pageSize).then(response => {
			dispatch(toggleIsFetching(false))
			dispatch(setTotalCount(response.data.totalCount))
			dispatch(setUsers(response.data.items))
		})
	}
}


export const setUnfollowThunkCreator = (id) => {
	return (dispatch) => {
		dispatch(toggleFollowing(id, true))
		followAPI.setUnfollowAPI(id).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(unfollow(id))
				dispatch(toggleFollowing(null, false))
			}
		})
	}

}

export const setFollowThunkCreator = (id) => {
	return async (dispatch) => {
		dispatch(toggleFollowing(id, true))
		const response = await followAPI.setFollowAPI(id);
		if (response.data.resultCode === 0) {
			dispatch(follow(id))
			dispatch(toggleFollowing(null, false))
		}
	}
}

export const showMoreUsers = (pageNumber, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true))
		usersAPI.getUsers(pageNumber, pageSize).then(response => {
			dispatch(toggleIsFetching(false))
			dispatch(showMore(response.data.items))
		})
	}
}

// Selectors 

const getUsers = (state) => {
	return state.users
}

export const getUsersSuper = createSelector(getUsers, (state) => {
	return state
})


const getLeft = (state) => {
	return state.users.left
}
export const getLeftSuper = createSelector(getLeft, (state) => {
	return state
})


const getRight = (state) => {
	return state.users.right
}
export const getRightSuper = createSelector(getRight, (state) => {
	return state
})
