import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router";
import { IsUserVerified } from "../utility/GeneralUtility";


export const AuthPrivateRouter = ()=>{
    const {isAuthenticated , isLoading} = IsUserVerified();
if(isLoading){
    return <div>loading...</div>
}
    return  isAuthenticated ? <Navigate to={"/dashboard"} /> : <Outlet />
}

export const DashboardPrivateRouter = ()=>{
const {isAuthenticated , isLoading} = IsUserVerified();
// if(isLoading){
//     return <div>loading...</div>
// }
return <Outlet />

    // return !isAuthenticated ? <Navigate to={"/login"} /> : <Outlet />
}