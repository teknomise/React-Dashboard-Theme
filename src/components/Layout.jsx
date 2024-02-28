import { Sidebar } from "./Sidebar"
import AppRoutes from "../Routes"

export const Layout = () => {
    return (
        <div className="container bg-page container-shadow">
            <div className="row">
                <div className="col-1">
                    <Sidebar />
                </div>
                <div className="col-11">
                    <AppRoutes />
                </div>
            </div>
        </div>
    )
}