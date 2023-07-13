import React, { useEffect } from 'react';
import Users from './Users.jsx';
const UsersAPIComponent = (props) => {
	const getData = (pageNumber, pageSize) => {
		props.getUsersThunkCreator(pageNumber, pageSize)
	}
	const follow = (id) => {
		props.setFollowThunkCreator(id)
	}
	const unfollow = (id) => {
		props.setUnfollowThunkCreator(id)
	}
	useEffect(() => {
		getData(props.users.currentPage, props.users.pageSize)
	}, [])

	return <>
		{props.users.isFetching ? <div className='loader'><img src='/src/img/loader.gif' alt='Loading...' /></div> : <Users
			users={props.users.usersData}
			setCurrentPage={props.setCurrentPage}
			getData={getData} showMore={props.showMore}
			currentPage={props.users.currentPage}
			totalCount={props.users.totalCount}
			pageSize={props.users.pageSize}
			follow={follow}
			pageSizeShowMore={props.users.pageSizeShowMore}
			unfollow={unfollow}
			isFetching={props.users.isFetching}
			followingInProgress={props.users.followingInProgress}
			redirectToLogin={props.redirectToLogin}
			showMoreUsers={props.showMoreUsers}
			left={props.left}
			right={props.right}
			setRight={props.setRight}
			setLeft={props.setLeft}
		/>}

	</>

}

export default UsersAPIComponent