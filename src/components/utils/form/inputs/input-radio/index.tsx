import React from "react";
import styled from "styled-components";
import { StyledComponentProps } from "../../../../../types/styled-component/styled-component-props";
import {
    FormGroupStyled,
    FormHelperErrorStyled,
    LabelStyled,
} from "../_base-inputs";

const RadioGroupStyled = styled.div<StyledComponentProps>`
    display: flex;
    flex-direction: column;
`;

const RadioLabelStyled = styled.label<StyledComponentProps>`
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colorValueForm};
    margin-bottom: 0.5rem;
    cursor: pointer;
`;

const RadioInputStyled = styled.input<StyledComponentProps>`
    margin-right: 0.5rem;
    accent-color: ${(props) => props.theme.switchRadioSelectColor};
`;

type RadioOption = {
    value: string;
    label: string;
};

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    options: RadioOption[];
    label: string;
    isInvalid: boolean;
    errorMessage?: string;
}

export default function RadioButtonComponent(props: Props) {
    return (
        <FormGroupStyled>
            <LabelStyled htmlFor={props.name}>{props.label}</LabelStyled>
            <RadioGroupStyled>
                {props.options.map((option) => (
                    <RadioLabelStyled key={option.value}>
                        <RadioInputStyled
                            type="radio"
                            name={props.name}
                            value={option.value}
                            checked={props.value === option.value}
                            onChange={props.onChange}
                        />
                        {option.label}
                    </RadioLabelStyled>
                ))}
            </RadioGroupStyled>
            {props.isInvalid && (
                <FormHelperErrorStyled>
                    {props.errorMessage}
                </FormHelperErrorStyled>
            )}
        </FormGroupStyled>
    );
}
