import { Field, reduxForm } from 'redux-form';
import './News.css';
import NewsItem from './NewsItem.jsx'
import { Textarea, Input } from '../../common/controls';
import { maxLengthCreator, required } from '../../../uitls/validators/validators';
const News = (props) => {
	const onSubmit = (formData) => {
		props.addItem(formData['news title'], formData['news text'])
	}
	return (
		<div className="news">
			<div className="news__items">
				{
					props.news.newsData.map(newsItem => (
						<NewsItem key={newsItem.id} newsItem={newsItem} />
					))
				}
			</div>
			<NewsFormRedux onSubmit={onSubmit} />
		</div>
	)
}
const maxLength10 = maxLengthCreator(10)
const maxLength200 = maxLengthCreator(200)
const NewsForm = (props) => {
	return <form onSubmit={(e) => {
		props.handleSubmit()
		props.reset('newsForm')
		e.preventDefault()
	}} className="news__controls">
		<Field component={Input} validate={[required, maxLength10]} name='news title' placeholder='Enter title to new' className="news__input _input" />
		<Field component={Textarea} validate={[required, maxLength200]} name='news text' placeholder='Enter text to new' className="news__input _input"></Field>
		<button type='submit' className="news__button _btn">Add new</button>
	</form>
}

const NewsFormRedux = reduxForm({ form: 'newsForm' })(NewsForm)

export default News;