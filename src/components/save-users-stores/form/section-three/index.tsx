import { FormikErrors, FormikTouched } from "formik";
import { UsersStoresSaveType } from "../../../../types/api-smart-hint/users-stores-save";
import styled from "styled-components";
import { StyledComponentProps } from "../../../../types/styled-component/styled-component-props";
import SubTitlePageComponent from "../../../utils/subtitle-page";
import RowContainerInputComponent from "../../../utils/form/container-inputs/container-row";
import FullContainerInputComponent from "../../../utils/form/container-inputs/container-full";
import InputSwitchComponent from "../../../utils/form/inputs/input-switch";
import { setIsInvalidFormik } from "../../../../helpers/methods-helpers";

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

export default function FormSaveUsersStoresSectionThreeComponent({
    onChange,
    values,
    touched,
    errors,
    setFieldValue,
}: Props) {
    return (
        <>
            <ContainerTitleStyled>
                <SubTitlePageComponent text="Situação do cliente" />
            </ContainerTitleStyled>
            <RowContainerInputComponent>
                <FullContainerInputComponent>
                    <InputSwitchComponent
                        name="isBlocked"
                        label="Bloqueado?"
                        valueBool={values.isBlocked}
                        onChangeBool={() => {
                            setFieldValue("isBlocked", !values.isBlocked);
                        }}
                        isInvalid={setIsInvalidFormik(
                            touched.isBlocked,
                            errors.isBlocked
                        )}
                        errorMessage={errors.isBlocked}
                    />
                </FullContainerInputComponent>
            </RowContainerInputComponent>
        </>
    );
}
