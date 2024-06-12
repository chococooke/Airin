import Sidebar from "../Containers/Sidebar"
import { Outlet } from "react-router-dom"

const Feed = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}

export default Feed;