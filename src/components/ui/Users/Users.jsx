import './Users.css'
import React, { useMemo, useState } from "react";
import UserItem from "./UserItem";
const Users = (props) => {
	let quantity = Math.ceil(props.totalCount / props.pageSize)
	let pages = []
	for (let i = 1; i <= quantity; i++) {
		pages.push(i);
	}
	const left = props.left
	const right = props.right
	const filteredPages = useMemo(() => {
		return pages.filter(p => {
			return p >= left && p <= right
		})
	}, [props.left, props.right])
	return (
		<div className="users" >
			<div className="users__block">
				{left != 0 &&
					<button type='button' onClick={e => {
						props.setLeft(left, false)
						props.setRight(right, false)
					}} className="users__left users__button">
						Prev
					</button>
				}
				<div className="users__pagination pagination">
					{filteredPages.map(p => {
						return <span onClick={e => {
							props.setCurrentPage(p)
							props.getData(p, props.pageSize)
						}} key={p} className={props.currentPage === p ? "pagination__button active" : "pagination__button not-active"}>{p}</span>
					})}
				</div>
				{right != props.totalCount && <button type='button' onClick={e => {
					props.setLeft(left, true)
					props.setRight(right, true)
				}} className="users__right users__button">
					Next
				</button>}
			</div>
			<div className="users__items">					{
				props.users.map(user => (
					<UserItem toggleFollowing={props.toggleFollowing} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow} user={user} key={user.id} />
				))
			}</div>
			<button onClick={e => {
				props.showMoreUsers(props.currentPage, props.pageSizeShowMore + 2)
				e.preventDefault()
			}} className="users__button _btn" > Show more</button>
		</div >
	)
}

export default Users