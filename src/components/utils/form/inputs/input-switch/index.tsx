import styled from "styled-components";
import { StyledComponentProps } from "../../../../../types/styled-component/styled-component-props";
import {
    FormGroupStyled,
    FormHelperErrorStyled,
    LabelStyled,
} from "../_base-inputs";

const ToggleContainerStyled = styled.label<
    StyledComponentProps & { isEnable: boolean }
>`
    display: inline-block;
    width: 46px;
    height: 20px;
    position: relative;
    background-color: ${(props) =>
        props.isEnable ? props.theme.switchRadioSelectColor : "#ccc"};
    border-radius: 17px;
    cursor: pointer;
`;

const ToggleButtonStyled = styled.span<
    StyledComponentProps & { isEnable: boolean }
>`
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
    transform: ${(props) =>
        props.isEnable ? "translateX(26px)" : "translateX(0)"};
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    isInvalid: boolean;
    errorMessage?: string;
    valueBool: boolean;
    onChangeBool: () => void;
}

export default function InputSwitchComponent(props: Props) {
    return (
        <FormGroupStyled>
            {props.label && (
                <LabelStyled htmlFor={props.name}>{props.label}</LabelStyled>
            )}

            <ToggleContainerStyled
                isEnable={props.valueBool}
                onClick={props.onChangeBool}
            >
                <ToggleButtonStyled isEnable={props.valueBool} />
            </ToggleContainerStyled>
            {props.isInvalid && (
                <FormHelperErrorStyled>
                    {props.errorMessage}
                </FormHelperErrorStyled>
            )}
        </FormGroupStyled>
    );
}
