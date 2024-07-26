import styled from "styled-components";
import logoLight from "../../../assets/images/logo-ad-cutted.png";
import logoDark from "../../../assets/images/logo-ad-dark-cutted.png";
import { StyledComponentProps } from "../../../types/styled-component/styled-component-props";
import { useContext } from "react";
import { ThemeContext } from "../../../providers/theme-provider";
import { useNavigate } from "react-router-dom";
import { routesPages } from "../../../helpers/routes-pages";

const ImageStyled = styled.img<StyledComponentProps>`
    width: 180px;
    cursor: pointer;
`;

export default function LogoComponent() {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <ImageStyled
            src={theme === "light" ? logoLight : logoDark}
            alt="Logo"
            onClick={() => navigate(routesPages.home)}
        />
    );
}
