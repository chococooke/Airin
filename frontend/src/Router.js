import { createBrowserRouter } from "react-router-dom";

import Home from "../src/Pages/Home";
import Settings from "../src/Pages/Settings";
import Feed from "./Pages/Feed";
import Notifications from "./Pages/Notifilcations";
import Profile from "./Pages/Profile";
import Discover from "./Pages/Discover";
import Auth from "./Pages/Auth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Feed />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "settings",
                element: <Settings />
            },
            {
                path: "discover",
                element: <Discover />
            },
            {
                path: "notifications",
                element: <Notifications />
            },
            {
                path: "profile",
                element: <Profile />
            }
        ]
    },
    {
        path: "/auth",
        element: <Auth />
    }
]);


export default router;