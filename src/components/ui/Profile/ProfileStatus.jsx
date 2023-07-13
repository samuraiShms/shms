import React from "react"
class ProfileStatus extends React.Component {

	state = {
		editMode: false,
		status: this.props.status
	}
	setActiveEditMode = () => {
		this.setState({ editMode: true })
	}
	setDisabledEditMode = (status) => {
		this.props.updateStatusThunkCreator(status)
		this.setState({ editMode: false })
	}
	componentDidUpdate(prevProps, prevState) {
		// То есть предыдущие пропсы ("")
		// И текущие (с сервера)
		if (prevProps.status != this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}
	render() {
		return <>
			<h2 className="profile-status__title">Status</h2>
			{
				this.props.statusProccess
					? <div className="loader loader-placement"><img src="/src/img/loader.gif" alt="load..." /></div>
					: (this.state.editMode == false ? <div>
						<button onClick={() => {
							this.props.userId == this.props.myId && this.setActiveEditMode()
						}} className="profile-status__button _btn">
							{this.props.userId == this.props.myId ? (this.props.status ? this.props.status + ' click to change' : 'click to change status') : this.props.status}
						</button>
					</div> :
						<div>
							<input autoFocus={true} placeholder="Change Status" onChange={e => this.setState({ status: e.currentTarget.value })} onBlur={e => {
								this.props.userId == this.props.myId && this.setDisabledEditMode(this.state.status)
							}} type="text" className="profile-status__input _input" value={this.state.status} />
						</div>)

			}
		</>
	}
}

export default ProfileStatus
