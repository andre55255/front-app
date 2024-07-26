import styled from "styled-components";
import { StyledComponentProps } from "../../../../types/styled-component/styled-component-props";

export const ContainerStyled = styled.div<StyledComponentProps>`
    padding: 0 10px;
    width: 100%;
`;

export const ButtonStyled = styled.button<StyledComponentProps>`
    background-color: transparent;
    color: ${(props) => props.theme.buttonSubmitBgColor};
    border: 1px solid ${(props) => props.theme.buttonSubmitBgColor};
    border-radius: 5px;
    padding: 0.7rem 1.2rem;
    width: 100%;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s;

    &:hover {
        color: ${(props) => props.theme.buttonSubmitTxtColor};
        background-color: ${(props) => props.theme.buttonSubmitBgColorHover};
    }
`;

type Props = {
    children: React.ReactNode;
    onClick: () => any;
};

export default function ButtonOutlineComponent({ children, onClick }: Props) {
    return (
        <ContainerStyled>
            <ButtonStyled type="button" onClick={onClick}>
                {children}
            </ButtonStyled>
        </ContainerStyled>
    );
}
