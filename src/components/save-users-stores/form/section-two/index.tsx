import { FormikErrors, FormikTouched } from "formik";
import { UsersStoresSaveType } from "../../../../types/api-smart-hint/users-stores-save";
import styled from "styled-components";
import { StyledComponentProps } from "../../../../types/styled-component/styled-component-props";
import SubTitlePageComponent from "../../../utils/subtitle-page";
import RowContainerInputComponent from "../../../utils/form/container-inputs/container-row";
import FullContainerInputComponent from "../../../utils/form/container-inputs/container-full";
import RadioButtonComponent from "../../../utils/form/inputs/input-radio";
import { setIsInvalidFormik } from "../../../../helpers/methods-helpers";
import InputCpfCnpjComponent from "../../../utils/form/inputs/input-cpf-cnpj";
import InputStateRegistrationComponent from "../../../utils/form/inputs/input-state-registration";
import InputSwitchComponent from "../../../utils/form/inputs/input-switch";
import InputDateComponent from "../../../utils/form/inputs/input-date";

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

export default function FormSaveUsersStoresSectionTwoComponent({
    onChange,
    values,
    touched,
    errors,
    setFieldValue,
}: Props) {
    return (
        <>
            <ContainerTitleStyled>
                <SubTitlePageComponent text="Informações Pessoais" />
            </ContainerTitleStyled>
            <RowContainerInputComponent>
                <FullContainerInputComponent>
                    <RadioButtonComponent
                        name="personType"
                        label="Tipo de pessoa"
                        options={[
                            { value: "F", label: "Pessoa Física" },
                            { value: "J", label: "Pessoa Jurídica" },
                        ]}
                        onChange={onChange}
                        isInvalid={setIsInvalidFormik(
                            touched.personType,
                            errors.personType
                        )}
                        errorMessage={errors.personType}
                        value={values.personType}
                    />
                </FullContainerInputComponent>
            </RowContainerInputComponent>
            <RowContainerInputComponent>
                <FullContainerInputComponent>
                    <InputCpfCnpjComponent
                        name="cpfCnpj"
                        label={values.personType === "F" ? "Cpf" : "Cnpj"}
                        isCpf={values.personType === "F"}
                        value={values.cpfCnpj}
                        placeholder={
                            values.personType === "F"
                                ? "xxx.xxx.xxx-xx"
                                : "xx.xxx.xxx/xxxx-xx"
                        }
                        isInvalid={setIsInvalidFormik(
                            touched.cpfCnpj,
                            errors.cpfCnpj
                        )}
                        errorMessage={errors.cpfCnpj}
                        onChange={onChange}
                    />
                </FullContainerInputComponent>
            </RowContainerInputComponent>
            <RowContainerInputComponent>
                <FullContainerInputComponent>
                    <InputStateRegistrationComponent
                        name="stateRegistration"
                        label="Inscrição Estadual"
                        value={values.stateRegistration}
                        placeholder="xxx.xxx.xxx.xxx"
                        isInvalid={setIsInvalidFormik(
                            touched.stateRegistration,
                            errors.stateRegistration
                        )}
                        errorMessage={errors.stateRegistration}
                        onChange={onChange}
                        disabled={values.isExempt}
                    />
                </FullContainerInputComponent>
            </RowContainerInputComponent>
            <RowContainerInputComponent>
                <FullContainerInputComponent>
                    <InputSwitchComponent
                        name="isExempt"
                        label="Isento?"
                        valueBool={values.isExempt}
                        onChangeBool={() => {
                            setFieldValue("stateRegistration", "");
                            setFieldValue("isExempt", !values.isExempt);
                        }}
                        isInvalid={setIsInvalidFormik(
                            touched.isExempt,
                            errors.isExempt
                        )}
                        errorMessage={errors.isExempt}
                    />
                </FullContainerInputComponent>
            </RowContainerInputComponent>
            {values.personType == "F" && (
                <>
                    <RowContainerInputComponent>
                        <FullContainerInputComponent>
                            <RadioButtonComponent
                                name="gender"
                                label="Gênero"
                                options={[
                                    { value: "M", label: "Masculino" },
                                    { value: "F", label: "Feminino" },
                                    { value: "O", label: "Outro" },
                                ]}
                                onChange={onChange}
                                isInvalid={setIsInvalidFormik(
                                    touched.gender,
                                    errors.gender
                                )}
                                errorMessage={errors.gender}
                                value={values.gender}
                            />
                        </FullContainerInputComponent>
                    </RowContainerInputComponent>
                    <RowContainerInputComponent>
                        <FullContainerInputComponent>
                            <InputDateComponent 
                                name="birthDate"
                                label="Data de nascimento"
                                value={values.birthDate}
                                placeholder="xx/xx/xxxx"
                                isInvalid={setIsInvalidFormik(
                                    touched.birthDate,
                                    errors.birthDate
                                )}
                                errorMessage={errors.birthDate}
                                onChange={onChange}
                            />
                        </FullContainerInputComponent>
                    </RowContainerInputComponent>
                </>
            )}
        </>
    );
}
