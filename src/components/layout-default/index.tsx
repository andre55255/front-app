import styled from "styled-components";
import { StyledComponentProps } from "../../types/styled-component/styled-component-props";
import LogoComponent from "../utils/logo";
import { useContext } from "react";
import { ThemeContext } from "../../providers/theme-provider";
import { FiMoon, FiSun } from "react-icons/fi";

const ContainerHeaderStyled = styled.header<StyledComponentProps>`
    padding: 30px 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ccc;
`;

const ContainerContentStyled = styled.main<StyledComponentProps>`
    padding: 30px;
`;

type Props = {
    children: React.ReactNode;
}

export default function LayoutDefaultComponent({ children }: Props) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <ContainerHeaderStyled>
                <LogoComponent />
                {theme === "light" ? (
                    <FiMoon size={25} color="#201e50" onClick={toggleTheme} />
                ) : (
                    <FiSun size={25} color="#ccc" onClick={toggleTheme} />
                )}
            </ContainerHeaderStyled>
            <ContainerContentStyled>
                {children}
            </ContainerContentStyled>
        </>
    );
}