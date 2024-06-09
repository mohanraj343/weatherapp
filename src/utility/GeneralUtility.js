import { useAuth0 } from "@auth0/auth0-react";

export const IsUserVerified = ()=>{
    const { isAuthenticated , isLoading } = useAuth0();
    return {isAuthenticated, isLoading}
}
export const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];