import { useState } from "react";
import FormSaveUsersStoresComponent from "./form";
import { UsersStoresSaveType } from "../../types/api-smart-hint/users-stores-save";
import { FormikHelpers } from "formik";

export default function CreateUsersStoresComponent() {
    const [isFetching, setIsFetching] = useState<boolean>(false);

    const handleSubmit = (
        values: UsersStoresSaveType,
        formikHelpers: FormikHelpers<UsersStoresSaveType>
    ) => {
        setIsFetching(true);
    };

    return (
        <FormSaveUsersStoresComponent
            isFetching={isFetching}
            handleSubmit={handleSubmit}
        />
    );
}
