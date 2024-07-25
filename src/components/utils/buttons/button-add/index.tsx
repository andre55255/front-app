import styled from "styled-components";
import { BaseButtonStyled } from "../_base-styled";
import { FaPlus } from "react-icons/fa";

const ButtonStyled = styled(BaseButtonStyled)`
    color: ${(props) => props.theme.buttonAddTxtColor};
    background-color: ${(props) => props.theme.buttonAddBgColor};

    &:hover {
        background-color: ${(props) => props.theme.buttonAddBgColorHover};
    }
`;

type Props = {
    title: string;
    onClick: () => any;
};

export default function ButtonAddComponent({ title, onClick }: Props) {
    return (
        <ButtonStyled onClick={onClick}>
            <FaPlus color="#f9f9f9" />
            {title}
        </ButtonStyled>
    );
}
