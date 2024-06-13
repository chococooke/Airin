import { Link } from "react-router-dom";
import CreatePost from "../Pages/CreatePost";
import { useState } from "react";

const Sidebar = () => {
    const [showCreatePostForm, setShowCreatePostForm] = useState(false);

    const toggleShowCreatePostForm = (e) => {
        e.preventDefault();

        setShowCreatePostForm(!showCreatePostForm)
    }

    return (
        <>
            {
                showCreatePostForm && <CreatePost close={toggleShowCreatePostForm} />
            }
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
                        <li className="sidebar__nav-list--item">
                            <button
                                onClick={(e) => toggleShowCreatePostForm(e)}
                            >
                                Create Post
                            </button>
                        </li>
                    </ul>
                    <button className="btn" >Log out</button>
                </nav>
            </div>
        </>
    )
}

export default Sidebar;