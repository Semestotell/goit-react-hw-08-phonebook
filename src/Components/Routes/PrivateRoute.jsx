import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import authSelectors from "redux/auth/auth-selectors"

export const PrivateRoute = ({children, redirect}) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return isLoggedIn ? children: <Navigate to={redirect}/>
}