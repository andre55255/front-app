import styled from "styled-components";
import { BaseButtonStyled } from "../_base-styled";
import { FaFilter } from "react-icons/fa";

const ButtonStyled = styled(BaseButtonStyled)`
    color: ${(props) => props.theme.buttonFilterTxtColor};
    background-color: ${(props) => props.theme.buttonFilterBgColor};

    &:hover {
        background-color: ${(props) => props.theme.buttonFilterBgColorHover};
    }
`;

type Props = {
    title: string;
    onClick: () => any;
};

export default function ButtonFilterComponent({ title, onClick }: Props) {
    return (
        <ButtonStyled onClick={onClick}>
            <FaFilter color="#f9f9f9" />
            {title}
        </ButtonStyled>
    );
}
