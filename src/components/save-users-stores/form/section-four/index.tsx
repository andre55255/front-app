import { FormikErrors, FormikTouched } from "formik";
import { UsersStoresSaveType } from "../../../../types/api-smart-hint/users-stores-save";
import styled from "styled-components";
import { StyledComponentProps } from "../../../../types/styled-component/styled-component-props";
import SubTitlePageComponent from "../../../utils/subtitle-page";
import RowContainerInputComponent from "../../../utils/form/container-inputs/container-row";
import FullContainerInputComponent from "../../../utils/form/container-inputs/container-full";
import { setIsInvalidFormik } from "../../../../helpers/methods-helpers";
import InputPasswordComponent from "../../../utils/form/inputs/input-password";
import HalfContainerInputComponent from "../../../utils/form/container-inputs/container-half";

const ContainerTitleStyled = styled.div<StyledComponentProps>`
    width: 100%;

    padding: 0 10px;
    display: flex;
    flex-direction: column;
    padding: 30px 0;
`;

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    values: UsersStoresSaveType;
    touched: FormikTouched<UsersStoresSaveType>;
    errors: FormikErrors<UsersStoresSaveType>;
    setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean
    ) => Promise<FormikErrors<UsersStoresSaveType>> | Promise<void>;
};

export default function FormSaveUsersStoresSectionFourComponent({
    onChange,
    values,
    touched,
    errors,
    setFieldValue,
}: Props) {
    return (
        <>
            <ContainerTitleStyled>
                <SubTitlePageComponent text="Senha de acesso" />
            </ContainerTitleStyled>
            <RowContainerInputComponent>
                <HalfContainerInputComponent weight={1}>
                    <InputPasswordComponent 
                        label="Senha"
                        name="password"
                        placeholder="Senha"
                        value={values.password}
                        onChange={onChange}
                        isInvalid={setIsInvalidFormik(
                            touched.password,
                            errors.password
                        )}
                        errorMessage={errors.password}
                    />
                </HalfContainerInputComponent>
                <HalfContainerInputComponent weight={1}>
                    <InputPasswordComponent 
                        label="Confirmação"
                        name="confirmPassword"
                        placeholder="Repita a senha"
                        value={values.confirmPassword}
                        onChange={onChange}
                        isInvalid={setIsInvalidFormik(
                            touched.confirmPassword,
                            errors.confirmPassword
                        )}
                        errorMessage={errors.confirmPassword}
                    />
                </HalfContainerInputComponent>
            </RowContainerInputComponent>
        </>
    );
}
