import styled from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component/styled-component-props";

export const BaseButtonStyled = styled.button<StyledComponentProps>`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    outline: none;  
    border-radius: 5px;

    & > svg {
        background-color: transparent;
        margin-right: 8px;
    }
`;