import { useContext } from "react";
import { toast, ToastOptions } from "react-toastify";
import { ThemeContext } from "../providers/theme-provider";

type TypeToast = "error" | "warning" | "info" | "success";

export function useToastApp() {
    const { theme } = useContext(ThemeContext);

    const toastOpt: ToastOptions = {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme: theme === "dark" ? "light" : "colored",
        pauseOnHover: true,
    };

    async function showToast(type: TypeToast, message: string | undefined) {
        switch (type) {
            case "error":
                toast.error(message, toastOpt);
                break;
            case "info":
                toast.info(message, toastOpt);
                break;
            case "success":
                toast.success(message, toastOpt);
                break;
            case "warning":
                toast.warning(message, toastOpt);
                break;
            default:
                break;
        }
    }

    return { showToast }
}
