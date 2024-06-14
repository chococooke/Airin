import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import CreatePost from "../Pages/CreatePost";

const Sidebar = () => {
    const navigate = useNavigate();
    const [showCreatePostForm, setShowCreatePostForm] = useState(false);

    const toggleShowCreatePostForm = (e) => {
        setShowCreatePostForm(!showCreatePostForm)
    }

    const logOut = () => {
        navigate('/auth');
    }

    return (
        <>
            {
                showCreatePostForm
                && <CreatePost close={toggleShowCreatePostForm} />
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
                            <button onClick={(e) => toggleShowCreatePostForm(e)}>
                                Create Post
                            </button>
                        </li>
                    </ul>

                    <button
                        className="btn"
                        onClick={() => logOut()}
                    >
                        Log out
                    </button>
                </nav>
            </div>
        </>
    )
}

export default Sidebar;