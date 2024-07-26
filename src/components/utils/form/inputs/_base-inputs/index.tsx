import styled from "styled-components";
import { StyledComponentProps } from "../../../../../types/styled-component/styled-component-props";
import ReactInputMask from "react-input-mask";

export const FormGroupStyled = styled.div<StyledComponentProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0 10px;
`;

export const LabelStyled = styled.label<StyledComponentProps>`
    align-self: flex-start;
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colorLabelForm};
`;

export const InputFormatStyled = styled(ReactInputMask)<
    StyledComponentProps & { isDisabled?: boolean }
>`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${(props) => props.theme.colorBorderInputForm};
    color: ${(props) => props.theme.colorValueForm};
    border-radius: 5px;
    font-size: 0.8rem;
    outline: none;
    caret-color: ${(props) => props.isDisabled ? "transparent" : props.theme.colorValueForm};
    background-color: ${(props) =>
        props.isDisabled ? props.theme.bgColorDisabledInput : "transparent"};
`;

export const InputStyled = styled.input<
    StyledComponentProps & { isDisabled?: boolean }
>`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${(props) => props.theme.colorBorderInputForm};
    color: ${(props) => props.theme.colorValueForm};
    border-radius: 5px;
    font-size: 0.8rem;
    outline: none;
    caret-color: ${(props) => props.isDisabled ? "transparent" : props.theme.colorValueForm};
    background-color: ${(props) =>
        props.isDisabled ? props.theme.bgColorDisabledInput : "transparent"};
`;

export const FormHelperErrorStyled = styled.small<StyledComponentProps>`
    font-size: 0.7rem;
    color: #ff6347;
    align-self: flex-start;
`;
