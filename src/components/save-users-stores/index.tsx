import { useEffect, useState } from "react";
import FormSaveUsersStoresComponent from "./form";
import { UsersStoresSaveType } from "../../types/api-smart-hint/users-stores-save";
import { FormikHelpers } from "formik";
import useCheckIsStateRegistrationForPFRequest from "../../services/smart-hint-api/configurations/is-state-registration-for-pf";
import { useToastApp } from "../../hooks/use-toast-app";
import useCreateUsersStoresRequest from "../../services/smart-hint-api/users-stores/create";
import { useNavigate } from "react-router-dom";
import { routesPages } from "../../helpers/routes-pages";

export default function CreateUsersStoresComponent() {
    const [isStateRegistrationForPF, setIsStateRegistrationForPF] = useState<boolean>(false);
    const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    
    const { checkIsStateRegistrationForPF } = useCheckIsStateRegistrationForPFRequest();
    const { createUsersStores } = useCreateUsersStoresRequest();
    const { showToast } = useToastApp();
    const navigate = useNavigate();

    const handleSubmit = async (
        values: UsersStoresSaveType,
        formikHelpers: FormikHelpers<UsersStoresSaveType>
    ) => {
        setIsFetching(true);
        const result = await createUsersStores(values);
        setIsFetching(false);

        if (result.status !== "OK") {
            await showToast("error", result.message);
            return;
        }
        await showToast("success", result.message);
        navigate(routesPages.home);
    };

    const InitIsStateRegistrationForPF = async () => {
        setIsLoadingData(true);
        const result = await checkIsStateRegistrationForPF();
        setIsLoadingData(false);

        if (result.status !== "OK") {
            showToast("error", result.message);
            return;
        }

        if (result.object)
            setIsStateRegistrationForPF(true);
    }

    useEffect(() => {
        InitIsStateRegistrationForPF();
    }, []);

    return (
        <FormSaveUsersStoresComponent
            isStateRegistrationForPFRequest={isStateRegistrationForPF}
            isFetching={isFetching}
            handleSubmit={handleSubmit}
            isLoadingData={isLoadingData}
        />
    );
}
