import { Outlet } from "react-router-dom";
import LayoutDefaultComponent from "../../components/layout-default";

export default function DefaultLayoutPage() {
    return (
        <LayoutDefaultComponent>
            <Outlet />
        </LayoutDefaultComponent>
    );
}
