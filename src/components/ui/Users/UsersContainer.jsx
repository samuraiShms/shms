import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import { getUsersSuper, getLeftSuper, getRightSuper } from "../../../redux/reducers/usersReducer";
import { follow, unfollow, showMore, setLeft, setRight, getUsersThunkCreator, showMoreUsers, toggleFollowing, setCurrentPage, setFollowThunkCreator, setUnfollowThunkCreator } from "../../../redux/reducers/usersReducer";
let mapStateToProps = (state) => {
	return {
		users: getUsersSuper(state),
		left: getLeftSuper(state),
		right: getRightSuper(state),
	}
}
// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => {
// 			dispatch(followAC(userId))
// 		},
// 		unfollow: (userId) => {
// 			dispatch(unFollowAC(userId))
// 		},
// 		showMore: () => {
// 			dispatch(showMoreAC())
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users))
// 		},
// 		setCurrentPage: (id) => {
// 			dispatch(setCurrentPageAC(id))
// 		},
// 		setTotalCount: (count) => {
// 			dispatch(setTotalCountAC(count))
// 		},
// 		toggleIsFetching: (isFetching) => {
// 			dispatch(toggleIsFetchingAC(isFetching))
// 		}
// 	}
// }
let mapDispatchToProps = {
	follow,
	unfollow,
	showMore,
	setCurrentPage,
	toggleFollowing,
	getUsersThunkCreator,
	setUnfollowThunkCreator,
	setFollowThunkCreator,
	showMoreUsers,
	setLeft,
	setRight

}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer