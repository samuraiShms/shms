const Message = (message) => {
	return (
		<div className="messages__item item-messages">
			<div className="item-messages__text">
				{message.message.text}
			</div>
		</div>
	)
}
export default Message;