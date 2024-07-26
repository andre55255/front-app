import styled from "styled-components";
import { BaseButtonStyled } from "../_base-styled";
import { StyledComponentProps } from "../../../../types/styled-component/styled-component-props";

const ButtonStyled = styled(BaseButtonStyled)<StyledComponentProps & { isOutline?: boolean }>`
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    border: 1px solid ${props => !props.isOutline ? "transparent" : props.theme.buttonDeleteBgColor};
    color: ${(props) =>
        props.isOutline
            ? props.theme.buttonDeleteBgColor
            : props.theme.buttonDeleteTxtColor};
    background-color: ${(props) =>
        props.isOutline ? "transparent" : props.theme.buttonDeleteBgColor};

    &:hover {
        color: ${(props) => props.theme.buttonDeleteTxtColor};
        background-color: ${(props) => props.theme.buttonDeleteBgColorHover};
    }
`;

type Props = {
    title: string;
    onClick: () => any;
    isOutline?: boolean;
};

export default function ButtonDeleteComponent({
    title,
    onClick,
    isOutline,
}: Props) {
    return <ButtonStyled isOutline={isOutline} onClick={onClick}>{title}</ButtonStyled>;
}
