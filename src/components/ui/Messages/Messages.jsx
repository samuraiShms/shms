import './Messages.css';
import Interlocutors from './Interlocutors.jsx'
import Message from './Message.jsx';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from '../../../uitls/validators/validators';
import { Textarea } from '../../common/controls';
const Messages = (props) => {
	const onSubmit = (formData) => {
		props.addNewMessage(formData.message, props.params.messagesId)

	}
	let messagesId = props.params.messagesId
	return (
		<div className="messages">
			<div className="messages__body">
				<div className="messages__interlocutors">
					{props.messages.interlocutorsData.map(interlocutor => (
						<Interlocutors key={interlocutor.id} interlocutor={interlocutor} />
					))}
				</div>
				<div className="messages__content">
					{props.messages.messagesData[messagesId].length ? props.messages.messagesData[messagesId]
						.map(message => (
							<Message message={message} key={message.id} />
						)) : <p>{props.messages.messagesData[0]}</p>}
				</div>
			</div>
			<MessagesFormRedux onSubmit={onSubmit} />
		</div>
	)
}
const maxLength15 = maxLengthCreator(15)
const MessagesForm = (props) => {

	return (
		<>
			<form onSubmit={e => {
				props.handleSubmit()
				props.reset('messagesForm')
				e.preventDefault()
			}} className="messages__controls controls-messages">
				<Field validate={[required, maxLength15]} name='message' component={Textarea} type="text" placeholder='Enter new message' className="controls-messages__item _input" />
				<button type='submit' className="controls-messages__button _btn">Add message</button>
			</form>
		</>
	)
}
const MessagesFormRedux = reduxForm({ form: 'messagesForm' })(MessagesForm)

export default Messages;