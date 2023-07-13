import './Posts.css'
import Posts from './Posts.jsx'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addNewPost } from './../../../redux/reducers/profileReducer';
let mapStateToProps = (state) => {
	return {
		posts: state.profile
	}
}
const PostsContainer = compose(connect(mapStateToProps, { addNewPost }))(Posts)



export default PostsContainer;
