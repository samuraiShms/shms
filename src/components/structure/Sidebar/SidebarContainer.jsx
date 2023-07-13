import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import { setUserProfileThunkCreator } from "../../../redux/reducers/profileReducer";

let mapStateToProps = (state) => {
	return {
		id: state.auth.id
	}
}
const SidebarContainer = connect(mapStateToProps, { setUserProfileThunkCreator })(Sidebar)

export default SidebarContainer