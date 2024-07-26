import {
    FormGroupStyled,
    FormHelperErrorStyled,
    InputFormatStyled,
    LabelStyled,
} from "../_base-inputs";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isInvalid: boolean;
    errorMessage?: string;
}

export default function InputStateRegistrationComponent(props: Props) {
    return (
        <FormGroupStyled>
            <LabelStyled htmlFor={props.name}>{props.label}</LabelStyled>
            <InputFormatStyled
                {...props}
                autoComplete="off"
                mask={"***.***.***-***"}
                isDisabled={props.disabled}
            />
            {props.isInvalid && (
                <FormHelperErrorStyled>
                    {props.errorMessage}
                </FormHelperErrorStyled>
            )}
        </FormGroupStyled>
    );
}
