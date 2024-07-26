import styled from "styled-components";
import { UsersStoresFilterType } from "../../../types/api-smart-hint/users-stores-filter";
import { StyledComponentProps } from "../../../types/styled-component/styled-component-props";
import FormFilterUsersStores from "./form";
import { FormikErrors, FormikHelpers } from "formik";

const ContainerMainStyled = styled.div<StyledComponentProps>`
    width: 100%;
`;

type Props = {
    isLoadingData: boolean;
    filterUsersStores: UsersStoresFilterType | undefined;
    handleSubmit: (
        values: UsersStoresFilterType
    ) => Promise<void>;
};

export default function FilterUsersStoresComponent({
    isLoadingData,
    filterUsersStores,
    handleSubmit,
}: Props) {
    const handleReset = async (
        setFieldValue: (
            field: string,
            value: any,
            shouldValidate?: boolean
        ) => Promise<FormikErrors<UsersStoresFilterType>> | Promise<void>
    ) => {
        setFieldValue("CpfCnpj", "");
        setFieldValue("Email", "");
        setFieldValue("IsBlocked", "");
        setFieldValue("NameOrCorporateReason", "");
        setFieldValue("PersonType", "");
        setFieldValue("PhoneNumber", "");
        setFieldValue("StateRegistration", "");

        await handleSubmit({});
    };

    return (
        <ContainerMainStyled>
            <FormFilterUsersStores
                handleSubmit={handleSubmit}
                isFetching={isLoadingData}
                values={filterUsersStores}
                handleReset={handleReset}
            />
        </ContainerMainStyled>
    );
}
