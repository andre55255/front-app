import { FormikHelpers, useFormik } from "formik";
import { UsersStoresSaveType } from "../../../types/api-smart-hint/users-stores-save";
import { formSaveUsersStoresSchema } from "./schema";
import { useEffect } from "react";
import FormContainerDefaultComponent from "../../utils/form/container-default";
import FormSaveUsersStoresSectionOneComponent from "./section-one";
import FormSaveUsersStoresSectionTwoComponent from "./section-two";
import FormSaveUsersStoresSectionThreeComponent from "./section-three";
import FormSaveUsersStoresSectionFourComponent from "./section-four";

type Props = {
    isStateRegistrationForPFRequest: boolean,
    isLoadingData?: boolean;
    isFetching: boolean;
    handleSubmit: (
        values: UsersStoresSaveType,
        formikHelpers: FormikHelpers<UsersStoresSaveType>
    ) => void | Promise<any>;
    values?: UsersStoresSaveType;
};

export default function FormSaveUsersStoresComponent({
    isStateRegistrationForPFRequest,
    isLoadingData,
    isFetching,
    handleSubmit,
    values,
}: Props) {
    const initialValues: UsersStoresSaveType = {
        nameOrCorporateReason: "",
        email: "",
        phoneNumber: "",
        personType: "F",
        cpfCnpj: "",
        stateRegistration: undefined,
        isExempt: false,
        gender: "M",
        birthDate: undefined,
        isBlocked: false,
        password: undefined,
        confirmPassword: undefined,
    };

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: formSaveUsersStoresSchema,
    });

    useEffect(() => {
        if (!values) return;

        formik.setFieldValue(
            "nameOrCorporateReason",
            values.nameOrCorporateReason
        );
        formik.setFieldValue("email", values.email);
        formik.setFieldValue("phoneNumber", values.phoneNumber);
        formik.setFieldValue("personType", values.personType);
        formik.setFieldValue("cpfCnpj", values.cpfCnpj);
        formik.setFieldValue("stateRegistration", values.stateRegistration);
        formik.setFieldValue("isExempt", values.isExempt);
        formik.setFieldValue("gender", values.gender);
        formik.setFieldValue("birthDate", values.birthDate);
        formik.setFieldValue("isBlocked", values.isBlocked);
        formik.setFieldValue("password", values.password);
    }, [values]);

    const propsSteps = {
        onChange: formik.handleChange,
        values: formik.values,
        touched: formik.touched,
        errors: formik.errors,
        setFieldValue: formik.setFieldValue,
        isStateRegistrationForPFRequest
    };

    return (
        <FormContainerDefaultComponent
            handleSubmit={formik.handleSubmit}
            isFetching={isFetching}
            isLoadingData={isLoadingData ?? false}
            title="Compradores"
        >
            <FormSaveUsersStoresSectionOneComponent {...propsSteps} />
            <FormSaveUsersStoresSectionTwoComponent {...propsSteps} />
            <FormSaveUsersStoresSectionThreeComponent {...propsSteps} />
            <FormSaveUsersStoresSectionFourComponent {...propsSteps} />
        </FormContainerDefaultComponent>
    );
}
