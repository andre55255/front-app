import { useEffect, useState } from "react";
import FormSaveUsersStoresComponent from "./form";
import { UsersStoresSaveType } from "../../types/api-smart-hint/users-stores-save";
import { FormikHelpers } from "formik";
import useCheckIsStateRegistrationForPFRequest from "../../services/smart-hint-api/configurations/is-state-registration-for-pf";
import { useToastApp } from "../../hooks/use-toast-app";
import useCreateUsersStoresRequest from "../../services/smart-hint-api/users-stores/create";
import { useNavigate } from "react-router-dom";
import { routesPages } from "../../helpers/routes-pages";
import useGetByIdUsersStoresRequest from "../../services/smart-hint-api/users-stores/get-by-id";
import { DefaultReturnServiceType } from "../../types/utils/default-return-service";
import useEditUsersStoresRequest from "../../services/smart-hint-api/users-stores/edit";

type Props = {
    id?: string;
    isEdit?: boolean;
};

export default function SaveUsersStoresComponent({ id, isEdit }: Props) {
    const [userEditData, setUserEditData] = useState<
        UsersStoresSaveType | undefined
    >(undefined);
    const [isStateRegistrationForPF, setIsStateRegistrationForPF] =
        useState<boolean>(false);
    const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
    const [isFetching, setIsFetching] = useState<boolean>(false);

    const { checkIsStateRegistrationForPF } =
        useCheckIsStateRegistrationForPFRequest();
    const { createUsersStores } = useCreateUsersStoresRequest();
    const { editUsersStores } = useEditUsersStoresRequest();
    const { getByIdUsersStores } = useGetByIdUsersStoresRequest();
    const { showToast } = useToastApp();
    const navigate = useNavigate();

    const handleSubmit = async (
        values: UsersStoresSaveType,
        formikHelpers: FormikHelpers<UsersStoresSaveType>
    ) => {
        let result: DefaultReturnServiceType<any>;

        setIsFetching(true);
        if (isEdit && id) {
            result = await editUsersStores(id, values);
        } else {
            result = await createUsersStores(values);
        }
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

        if (result.object) setIsStateRegistrationForPF(true);
    };

    const initDataUserIfExist = async () => {
        if (!id) return;

        setIsLoadingData(true);
        const result = await getByIdUsersStores(id);
        setIsLoadingData(false);

        if (result.status !== "OK") {
            showToast("error", result.message);
            navigate(routesPages.home);
            return;
        }

        if (result.object) {
            setUserEditData(result.object);
        }
    };

    useEffect(() => {
        InitIsStateRegistrationForPF();
        initDataUserIfExist();
    }, []);

    return (
        <FormSaveUsersStoresComponent
            isStateRegistrationForPFRequest={isStateRegistrationForPF}
            isFetching={isFetching}
            handleSubmit={handleSubmit}
            isLoadingData={isLoadingData}
            values={userEditData}
        />
    );
}
