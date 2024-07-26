import { FormGroupStyled, FormHelperErrorStyled, InputStyled, LabelStyled } from "../_base-inputs";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isInvalid: boolean;
    errorMessage?: string;
}

export default function InputDefaultComponent(props: Props) {
    return (
        <FormGroupStyled>
            <LabelStyled htmlFor={props.name}>{props.label}</LabelStyled>
            <InputStyled {...props} autoComplete="off" isDisabled={props.disabled} />
            {props.isInvalid && (
                <FormHelperErrorStyled>
                    {props.errorMessage}
                </FormHelperErrorStyled>
            )}
        </FormGroupStyled>
    );
}
