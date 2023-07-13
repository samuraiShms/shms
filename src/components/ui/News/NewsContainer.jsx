import News from "./News.jsx";
import { newsActionCreators } from "../../../redux/reducers/newsReducer.jsx";
import { connect } from "react-redux";
import redirectToLogin from "../../../HighOrderComponents/redirectToLogin.jsx";
import { compose } from "redux";


let mapStateToProps = (state) => {
	return {
		news: state.news,
	}
}

const NewsContainer = compose(connect(mapStateToProps,
	{
		addItem: newsActionCreators.addItem,
	}),
	redirectToLogin)(News)


export default NewsContainer




