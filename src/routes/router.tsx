import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { routesPages } from "../helpers/routes-pages";

import DefaultLayoutPage from "../pages/_layout/default-layout";
import NotFoundPage from "../pages/_not-found";

import HomePage from "../pages/home";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<DefaultLayoutPage />}>
                <Route path={routesPages.home} element={<HomePage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </>
    )
);

export default Router;
