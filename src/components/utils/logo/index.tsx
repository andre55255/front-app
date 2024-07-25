import styled from "styled-components";
import logoLight from "../../../assets/images/logo-ad-cutted.png";
import logoDark from "../../../assets/images/logo-ad-dark-cutted.png";
import { StyledComponentProps } from "../../../types/styled-component/styled-component-props";
import { useContext } from "react";
import { ThemeContext } from "../../../providers/theme-provider";

const ImageStyled = styled.img<StyledComponentProps>`
    width: 180px;
`;

export default function LogoComponent() {
    const { theme } = useContext(ThemeContext);

    return <ImageStyled src={theme === "light" ? logoLight : logoDark} alt="Logo" />
}