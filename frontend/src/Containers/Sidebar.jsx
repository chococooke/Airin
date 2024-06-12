import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <nav className="sidebar__nav">
                    <ul className="sidebar__nav-list">
                        <li className="sidebar__nav-list--item">
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className="sidebar__nav-list--item">
                            <Link to={"/discover"} >Discover</Link>
                        </li>
                        <li className="sidebar__nav-list--item">
                            <Link to={"/notifications"}>Notifications</Link>
                        </li>
                        <li className="sidebar__nav-list--item">
                            <Link to={"profile"}>Profile</Link>
                        </li>
                        <li className="sidebar__nav-list--item">
                            <Link to={'/settings'}>Settings</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar;