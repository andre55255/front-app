import { endpointsSmartHintApi } from "../../../helpers/constants";
import { formatStrToDatePtBr } from "../../../helpers/methods-helpers";
import { UsersStoresSaveType } from "../../../types/api-smart-hint/users-stores-save";
import { DefaultReturnServiceType } from "../../../types/utils/default-return-service";
import { useRequestClient } from "../_configs/request-client";

export default function useGetByIdUsersStoresRequest() {
    const { requestClient } = useRequestClient();

    async function getByIdUsersStores(
        id?: string
    ): Promise<DefaultReturnServiceType<UsersStoresSaveType>> {
        try {
            const result = await requestClient<UsersStoresSaveType>({
                url: endpointsSmartHintApi.usersStores.getById + "/" + id,
                method: "GET",
            });

            if (result.object && result.object.birthDate) {
                result.object.birthDate = formatStrToDatePtBr(result.object.birthDate);
            }

            return {
                status: result.status === 200 ? "OK" : "BAD",
                message: result.message,
                object: result.object,
            };
        } catch (ex) {
            return {
                status: "BAD",
                message: `Ops, não foi possível listar comprador com id ${id} por problemas técnicos. Contate o suporte!`,
            };
        }
    }

    return { getByIdUsersStores };
}
