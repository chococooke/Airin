import { createBrowserRouter } from "react-router-dom";

import Home from "../src/Pages/Home";
import Settings from "../src/Pages/Settings";
import Feed from "./Pages/Feed";
import Notifications from "./Pages/Notifilcations";
import Profile from "./Pages/Profile";
import Discover from "./Pages/Discover";

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
    }
]);


export default router;