import AppProviders from "./providers/_index";
import { GlobalStyles } from "./global-styles";
import { RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/_not-found";
import Router from "./routes/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    return (
        <AppProviders>
            <GlobalStyles />
            <ToastContainer
                pauseOnFocusLoss
                draggable
                pauseOnHover
                closeOnClick
                hideProgressBar={false}
                newestOnTop={false}
            />
            <RouterProvider
                router={Router}
                fallbackElement={<NotFoundPage />}
            />
        </AppProviders>
    );
}
