const PostItem = (props) => {
	return (
		<div className="posts__item item-posts">
			<div className="item-posts__logo">
				<img src="/src/img/user.png" alt="image" />
			</div>
			<div className="item-posts__name">{props.post.From}</div>
			<div className="item-posts__text">{props.post.Message}</div>
		</div>
	)
}

export default PostItem;