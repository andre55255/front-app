import { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../helpers/theme-styled";
import { constants } from "../helpers/constants";

type PropsCtx = {
    toggleTheme: () => void;
    theme: "light" | "dark";
};

export const ThemeContext = createContext<PropsCtx>({
    theme: "light",
    toggleTheme: () => {},
});

type PropsProvider = {
    children: React.ReactNode;
};

export const ThemeProvider = ({ children }: PropsProvider) => {
    const localStorageTheme = localStorage.getItem(
        constants.localStorageVar.THEME_APP
    );
    if (!localStorageTheme)
        localStorage.setItem(constants.localStorageVar.THEME_APP, "light");

    const initialTheme = !localStorageTheme
        ? "light"
        : localStorageTheme === "light"
        ? "light"
        : "dark";

    const [theme, setTheme] = useState<"light" | "dark">(initialTheme);

    const toggleTheme = () => {
        const newVal = theme === "light" ? "dark" : "light";

        localStorage.setItem(constants.localStorageVar.THEME_APP, newVal);
        setTheme(newVal);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider
                theme={theme === "light" ? lightTheme : darkTheme}
            >
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};
