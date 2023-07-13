import { NavLink } from "react-router-dom";
import styles from './Sidebar.module.css'
const Sidebar = (props) => {
	return (
		<aside className="sidebar">
			<div className='sidebar__container _container'>
				<div className="sidebar__body">
					<ul className="sidebar__list">
						<li >
							<NavLink onClick={() => props.setUserProfileThunkCreator(props.id)} exact="true" className={({ isActive }) => isActive ? `${styles.item} active-tab` : `${styles.item}`} to={`/profile/${props.id}`}>MyProfile</NavLink>
						</li>

						<li >
							<NavLink exact="true" className={({ isActive }) => isActive ? `${styles.item} active-tab` : `${styles.item}`} to='/messages/1'>Messages</NavLink>
						</li>
						<li>
							<NavLink exact="true" className={({ isActive }) => isActive ? `${styles.item} active-tab` : `${styles.item}`} to='/news'>News</NavLink>
						</li>
						<li>
							<NavLink exact="true" className={({ isActive }) => isActive ? `${styles.item} active-tab` : `${styles.item}`} to='/users'>Users</NavLink>
						</li>
						<li >
							<NavLink exact="true" className={({ isActive }) => isActive ? `${styles.item} active-tab` : `${styles.item}`} to='/settings'>Settings</NavLink>
						</li>
					</ul>
					<div className="sidebar__friends friends-sidebar">
						<div className="friends-sidebar__title">
							Friends
						</div>
						<div className="friends-sidebar__items">
							<div className="friends-sidebar__item">
								<NavLink to='/' className="friends-sidebar__icon">

								</NavLink>
								<div className="friends-sidebar__name">
									Name
								</div>
							</div>
							<div className="friends-sidebar__item">
								<NavLink to='/' className="friends-sidebar__icon">

								</NavLink>
								<div className="friends-sidebar__name">
									Name
								</div>
							</div>
							<div className="friends-sidebar__item">
								<NavLink to='/' className="friends-sidebar__icon">

								</NavLink>
								<div className="friends-sidebar__name">
									Name
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</aside>
	)
}

export default Sidebar;