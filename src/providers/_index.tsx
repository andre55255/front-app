import { ThemeProvider } from "./theme-provider";

type Props = {
    children: React.ReactNode;
};

export default function AppProviders({ children }: Props) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}
