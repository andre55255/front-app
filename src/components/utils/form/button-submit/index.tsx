import styled from "styled-components";
import { StyledComponentProps } from "../../../../types/styled-component/styled-component-props";

export const ContainerStyled = styled.div<StyledComponentProps>`
    padding: 0 10px;
    width: 100%;
`;

export const ButtonStyled = styled.button<StyledComponentProps>`
    background-color: ${(props) => props.theme.buttonSubmitBgColor};
    color: ${(props) => props.theme.buttonSubmitTxtColor};
    border: none;
    border-radius: 5px;
    padding: 0.7rem 1.2rem;
    width: 100%;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${(props) => props.theme.buttonSubmitBgColorHover};
    }
`;

type Props = {
    children: React.ReactNode;
    disabled: boolean;
};

export default function ButtonSubmitComponent({ children, disabled }: Props) {
    return (
        <ContainerStyled>
            <ButtonStyled type="submit" disabled={disabled}>
                {children}
            </ButtonStyled>
        </ContainerStyled>
    );
}
