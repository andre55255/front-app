import { FormGroupStyled, FormHelperErrorStyled, InputFormatStyled, LabelStyled } from "../_base-inputs";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isInvalid: boolean;
    errorMessage?: string;
    isCpf: boolean;
}

export default function InputCpfCnpjComponent(props: Props) {
    return (
        <FormGroupStyled>
            <LabelStyled htmlFor={props.name}>{props.label}</LabelStyled>
            <InputFormatStyled
                {...props}
                autoComplete="off"
                mask={props.isCpf ? "999.999.999-99" : "99.999.999/9999-99"}
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
