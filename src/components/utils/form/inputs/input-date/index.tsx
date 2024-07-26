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

export default function InputDateComponent(props: Props) {
    return (
        <FormGroupStyled>
            <LabelStyled htmlFor={props.name}>{props.label}</LabelStyled>
            <InputFormatStyled
                {...props}
                autoComplete="off"
                mask={"99/99/9999"}
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
