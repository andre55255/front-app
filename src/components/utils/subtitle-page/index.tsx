import styled from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component/styled-component-props";

const SubTitleStyled = styled.p<StyledComponentProps>`
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme.titlePageTxtColor};
`;

type Props = {
    text: string;
};

export default function SubTitlePageComponent({ text }: Props) {
    return (
        <SubTitleStyled>
            {"-"} {text}
        </SubTitleStyled>
    );
}
