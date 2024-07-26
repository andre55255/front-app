import { FormikErrors, FormikHelpers, useFormik } from "formik";
import { UsersStoresFilterType } from "../../../../types/api-smart-hint/users-stores-filter";
import { useEffect } from "react";
import FormContainerDefaultComponent from "../../../utils/form/container-default";
import RowContainerInputComponent from "../../../utils/form/container-inputs/container-row";
import FullContainerInputComponent from "../../../utils/form/container-inputs/container-full";
import InputDefaultComponent from "../../../utils/form/inputs/input-default";
import { setIsInvalidFormik } from "../../../../helpers/methods-helpers";
import RadioButtonComponent from "../../../utils/form/inputs/input-radio";

type Props = {
    isFetching: boolean;
    handleSubmit: (
        values: UsersStoresFilterType,
        formikHelpers: FormikHelpers<UsersStoresFilterType>
    ) => void | Promise<any>;
    values?: UsersStoresFilterType;
    handleReset: (
        setFieldValue: (
            field: string,
            value: any,
            shouldValidate?: boolean
        ) => Promise<FormikErrors<UsersStoresFilterType>> | Promise<void>
    ) => any;
};

export default function FormFilterUsersStores({
    isFetching,
    handleSubmit,
    values,
    handleReset
}: Props) {
    const initialValues: UsersStoresFilterType = {};

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
    });

    useEffect(() => {
        if (!values) return;

        formik.setFieldValue("CpfCnpj", values.CpfCnpj);
        formik.setFieldValue("Email", values.Email);
        formik.setFieldValue("IsBlocked", values.IsBlocked);
        formik.setFieldValue(
            "NameOrCorporateReason",
            values.NameOrCorporateReason
        );
        formik.setFieldValue("PersonType", values.PersonType);
        formik.setFieldValue("PhoneNumber", values.PhoneNumber);
        formik.setFieldValue("StateRegistration", values.StateRegistration);
    }, [values]);

    return (
        <FormContainerDefaultComponent
            handleSubmit={formik.handleSubmit}
            isFetching={isFetching}
            isLoadingData={false}
            isNotPadding={true}
            btnSecondaryFormTitle="Limpar filtros"
            onClickBtnSecondaryForm={() => handleReset(formik.setFieldValue)}
        >
            <>
                <RowContainerInputComponent>
                    <FullContainerInputComponent>
                        <InputDefaultComponent
                            label="Nome/Razão Social"
                            name="NameOrCorporateReason"
                            value={formik.values.NameOrCorporateReason}
                            placeholder="Nome/Razão Social"
                            isInvalid={setIsInvalidFormik(
                                formik.touched.NameOrCorporateReason,
                                formik.errors.NameOrCorporateReason
                            )}
                            onChange={formik.handleChange}
                        />
                    </FullContainerInputComponent>
                </RowContainerInputComponent>
                <RowContainerInputComponent>
                    <FullContainerInputComponent>
                        <InputDefaultComponent
                            label="Email"
                            name="Email"
                            value={formik.values.Email}
                            placeholder="Email"
                            isInvalid={setIsInvalidFormik(
                                formik.touched.Email,
                                formik.errors.Email
                            )}
                            onChange={formik.handleChange}
                        />
                    </FullContainerInputComponent>
                </RowContainerInputComponent>
                <RowContainerInputComponent>
                    <FullContainerInputComponent>
                        <InputDefaultComponent
                            label="Telefone"
                            name="PhoneNumber"
                            value={formik.values.PhoneNumber}
                            placeholder="Telefone"
                            isInvalid={setIsInvalidFormik(
                                formik.touched.PhoneNumber,
                                formik.errors.PhoneNumber
                            )}
                            onChange={formik.handleChange}
                        />
                    </FullContainerInputComponent>
                </RowContainerInputComponent>
                <RowContainerInputComponent>
                    <FullContainerInputComponent>
                        <InputDefaultComponent
                            label="Cpf/Cnpj"
                            name="CpfCnpj"
                            value={formik.values.CpfCnpj}
                            placeholder="Cpf/Cnpj"
                            isInvalid={setIsInvalidFormik(
                                formik.touched.CpfCnpj,
                                formik.errors.CpfCnpj
                            )}
                            onChange={formik.handleChange}
                        />
                    </FullContainerInputComponent>
                </RowContainerInputComponent>
                <RowContainerInputComponent>
                    <FullContainerInputComponent>
                        <InputDefaultComponent
                            label="Inscrição Estadual"
                            name="StateRegistration"
                            value={formik.values.StateRegistration}
                            placeholder="Inscrição Estadual"
                            isInvalid={setIsInvalidFormik(
                                formik.touched.StateRegistration,
                                formik.errors.StateRegistration
                            )}
                            onChange={formik.handleChange}
                        />
                    </FullContainerInputComponent>
                </RowContainerInputComponent>
                <RowContainerInputComponent>
                    <FullContainerInputComponent>
                        <RadioButtonComponent
                            name="PersonType"
                            label="Tipo de pessoa"
                            options={[
                                { value: "F", label: "Pessoa Física" },
                                { value: "J", label: "Pessoa Jurídica" },
                                { value: "0", label: "Todos" },
                            ]}
                            onChange={formik.handleChange}
                            isInvalid={setIsInvalidFormik(
                                formik.touched.PersonType,
                                formik.errors.PersonType
                            )}
                            errorMessage={formik.errors.PersonType}
                            value={formik.values.PersonType}
                        />
                    </FullContainerInputComponent>
                </RowContainerInputComponent>
            </>
        </FormContainerDefaultComponent>
    );
}
