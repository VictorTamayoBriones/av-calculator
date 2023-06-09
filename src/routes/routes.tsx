import { Navigate, Route, Routes } from "react-router-dom"
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../models/routes.model"
import { FourOFour, Home, Login } from "@/views"
import { AuthGuard } from "@/guards/authGuard"


export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Navigate to={PRIVATE_ROUTES.HOME} />} />
            <Route path={PUBLIC_ROUTES.LOGIN} element={<Login/>} />

            <Route element={<AuthGuard/>} >
                <Route path={PRIVATE_ROUTES.HOME} element={<Home/>} />
            </Route>
            
            <Route path="*" element={<FourOFour/>} />
        </Routes>
    )
}