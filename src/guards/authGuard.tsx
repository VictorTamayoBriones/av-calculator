import { AppStore } from "@/redux/store";
import { PUBLIC_ROUTES } from "@/models/routes.model";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
    const userState = useSelector((store: AppStore) => store.user);
    return userState.name ? <Outlet/> : <Navigate to={PUBLIC_ROUTES.LOGIN} />
}