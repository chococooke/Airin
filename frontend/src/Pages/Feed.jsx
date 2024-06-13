import Sidebar from "../Containers/Sidebar"
import { Outlet } from "react-router-dom"

const Feed = () => {
    return (
        <>
            <div className="feed">
                <Sidebar />
                <div className="outlet">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Feed;