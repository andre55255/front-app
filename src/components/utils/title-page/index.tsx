import styled from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component/styled-component-props";

const TitleStyled = styled.p<StyledComponentProps>`
    font-size: 1.2rem;
    font-weight: 700;
    color: ${props => props.theme.titlePageTxtColor};
    text-align: justify;
`;

type Props = {
    text: string;
}

export default function TitlePageComponent({ text }: Props) {
    return (
        <TitleStyled>{">"} {text}</TitleStyled>
    );
}