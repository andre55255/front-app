import { endpointsSmartHintApi } from "../../../helpers/constants";
import { UsersStoresGetType } from "../../../types/api-smart-hint/users-stores-get";
import { DefaultReturnServiceType } from "../../../types/utils/default-return-service";
import { useRequestClient } from "../_configs/request-client";

export function useUsersStoresRequest() {
    const { requestClient } = useRequestClient();

    async function getUsersStores(): Promise<
        DefaultReturnServiceType<UsersStoresGetType[]>
    > {
        try {
            const result = await requestClient<UsersStoresGetType[]>({
                url: endpointsSmartHintApi.usersStores.getAll,
                method: "GET",
            });

            return {
                status: result.status === 200 ? "OK" : "BAD",
                message: result.message,
                object: result.object,
            };
        } catch (ex) {
            return {
                status: "BAD",
                message:
                    "Ops, não foi possível listar compradores por problemas técnicos. Contate o suporte!",
            };
        }
    }

    return { getUsersStores };
}
