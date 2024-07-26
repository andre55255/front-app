import { FormikErrors, FormikTouched } from "formik";
import { UsersStoresSaveType } from "../../../../types/api-smart-hint/users-stores-save";
import InputDefaultComponent from "../../../utils/form/inputs/input-default";
import { setIsInvalidFormik } from "../../../../helpers/methods-helpers";
import styled from "styled-components";
import { StyledComponentProps } from "../../../../types/styled-component/styled-component-props";
import SubTitlePageComponent from "../../../utils/subtitle-page";
import RowContainerInputComponent from "../../../utils/form/container-inputs/container-row";
import FullContainerInputComponent from "../../../utils/form/container-inputs/container-full";
import HalfContainerInputComponent from "../../../utils/form/container-inputs/container-half";
import InputPhoneNumberComponent from "../../../utils/form/inputs/input-phone";

const ContainerTitleStyled = styled.div<StyledComponentProps>`
    width: 100%;

    padding: 0 10px;
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
`;

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    values: UsersStoresSaveType;
    touched: FormikTouched<UsersStoresSaveType>;
    errors: FormikErrors<UsersStoresSaveType>;
};

export default function FormSaveUsersStoresSectionOneComponent({
    onChange,
    values,
    touched,
    errors,
}: Props) {
    return (
        <>
            <ContainerTitleStyled>
                <SubTitlePageComponent text="Área principal" />
            </ContainerTitleStyled>
            <RowContainerInputComponent>
                <FullContainerInputComponent>
                    <InputDefaultComponent
                        label="Nome do Cliente/Razão Social"
                        name="nameOrCorporateReason"
                        type="text"
                        placeholder="Nome do Cliente/Razão Social"
                        value={values.nameOrCorporateReason}
                        onChange={onChange}
                        isInvalid={setIsInvalidFormik(
                            touched.nameOrCorporateReason,
                            errors.nameOrCorporateReason
                        )}
                        errorMessage={errors.nameOrCorporateReason}
                    />
                </FullContainerInputComponent>
            </RowContainerInputComponent>
            <RowContainerInputComponent>
                <HalfContainerInputComponent weight={1}>
                    <InputDefaultComponent
                        label="Email"
                        name="email"
                        type="text"
                        placeholder="fulanodetal@email.com"
                        value={values.email}
                        onChange={onChange}
                        isInvalid={setIsInvalidFormik(touched.email, errors.email)}
                        errorMessage={errors.email}
                    />
                </HalfContainerInputComponent>
                <HalfContainerInputComponent weight={1}>
                    <InputPhoneNumberComponent
                        label="Telefone"
                        name="phoneNumber"
                        type="tel"
                        placeholder="(xx) xxxxx-xxxx"
                        value={values.phoneNumber}
                        onChange={onChange}
                        isInvalid={setIsInvalidFormik(touched.phoneNumber, errors.phoneNumber)}
                        errorMessage={errors.phoneNumber}
                    />
                </HalfContainerInputComponent>
            </RowContainerInputComponent>
        </>
    );
}
