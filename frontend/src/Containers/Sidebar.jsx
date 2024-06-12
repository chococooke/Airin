const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <nav className="sidebar__nav">
                    <ul className="sidebar__nav-list">
                        <li className="sidebar__nav-list--item">Home</li>
                        <li className="sidebar__nav-list--item">Discover</li>
                        <li className="sidebar__nav-list--item">Notifications</li>
                        <li className="sidebar__nav-list--item">Profile</li>
                        <li className="sidebar__nav-list--item">Settings</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar;