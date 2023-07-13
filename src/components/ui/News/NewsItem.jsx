const NewsItem = ({ newsItem }) => {
	return (
		<div key={newsItem.id} className="news__item">
			<div className="news__title">
				{newsItem.title}
			</div>
			<div className="news__text">
				{newsItem.text}
			</div>
			<div className="news__date">
				{newsItem.date}
			</div>
		</div>
	)

}

export default NewsItem