import Login from "../auth/Login";
import DashboardApp from "../home/DashboardApp";
import { AuthPrivateRouter, DashboardPrivateRouter } from "./PrivateRouter";

export const RouterPaths = [{
    path : "/",
    element : <AuthPrivateRouter />,
    children : [{
        path : "login",
        element : <Login />
    }]
}, 
{
    path : "/",
    element : <DashboardPrivateRouter />,
    children:[{
        path : "dashboard",
        element : <DashboardApp />
    }]
}
,
{
    path : "*",
    element : <div style={{
        textAlign:"center"
    }}> Page not found</div>
}]