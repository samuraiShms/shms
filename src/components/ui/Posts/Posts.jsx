import './Posts.css'
import PostItem from './PostItem.jsx'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../common/controls'
import { reset } from 'redux-form'
import React from 'react'
const Posts = React.memo(props => {
	const onSubmit = (formData) => {
		props.addNewPost(formData['posts name'], formData['posts message'])
	}
	return (
		<div className='posts'>
			<div className="posts__body">
				<PostsFormRedux onSubmit={onSubmit} />
				<div className="posts__items">
					{[...props.posts.postsData].reverse().map(post => (
						<PostItem key={post.id} post={post}>
						</PostItem>
					))}
				</div>
			</div>
		</div >
	)
})

const PostsForm = (props) => {
	return <form onSubmit={(e) => {
		props.handleSubmit()
		props.reset('postsForm')
		e.preventDefault()
	}} className="posts__controls controls-posts">
		<div className="controls-posts__item">
			<Field name="posts name" component={Input} placeholder='from' type="text" autoComplete='off' className="controls-posts__input _input" />
		</div>
		<div className="controls-posts__item">
			<Field name='posts message' component={Textarea} placeholder='enter your message' className="controls-posts__textarea _input"></Field>
		</div>
		<button type='submit' className="controls-posts__button _btn">Create post</button>
	</form>
}
const PostsFormRedux = reduxForm({ form: 'postsForm' })(PostsForm)



export default Posts;