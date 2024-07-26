import styled from "styled-components";
import { StyledComponentProps } from "../../../../../types/styled-component/styled-component-props";
import { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { FormGroupStyled, FormHelperErrorStyled, InputStyled, LabelStyled } from "../_base-inputs";

const ShowPasswordIconStyled = styled.span<StyledComponentProps>`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;

    svg {
        color: ${(props) => props.theme.colorValueForm};
        background-color: transparent;
    }
`;

const InputContainerStyled = styled.div`
    position: relative;
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isInvalid: boolean;
    errorMessage?: string;
}

export default function InputPasswordComponent(props: Props) {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
        <FormGroupStyled>
            <LabelStyled htmlFor={props.name}>{props.label}</LabelStyled>
            <InputContainerStyled>
                <InputStyled
                    {...props}
                    type={showPassword ? "text" : "password"}
                    autoComplete="off"
                    isDisabled={props.disabled}
                />
                <ShowPasswordIconStyled onClick={handleShowPassword}>
                    {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </ShowPasswordIconStyled>
            </InputContainerStyled>
            {props.isInvalid && (
                <FormHelperErrorStyled>
                    {props.errorMessage}
                </FormHelperErrorStyled>
            )}
        </FormGroupStyled>
    );
}
