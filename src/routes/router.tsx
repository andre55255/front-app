import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { routesPages } from "../helpers/routes-pages";

import DefaultLayoutPage from "../pages/_layout/default-layout";
import NotFoundPage from "../pages/_not-found";

import HomePage from "../pages/home";
import CreateUsersStoresPage from "../pages/create-users-stores";
import EditUsersStoresPage from "../pages/edit-users-stores";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<DefaultLayoutPage />}>
                <Route path={routesPages.home} element={<HomePage />} />
                <Route
                    path={routesPages.createUsersStores}
                    element={<CreateUsersStoresPage />}
                />
                <Route
                    path={routesPages.editUsersStores}
                    element={<EditUsersStoresPage />}
                />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </>
    )
);

export default Router;
