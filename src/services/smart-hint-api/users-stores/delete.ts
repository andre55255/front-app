import { endpointsSmartHintApi } from "../../../helpers/constants";
import { formatStrToDatePtBr } from "../../../helpers/methods-helpers";
import { UsersStoresSaveType } from "../../../types/api-smart-hint/users-stores-save";
import { DefaultReturnServiceType } from "../../../types/utils/default-return-service";
import { useRequestClient } from "../_configs/request-client";

export default function useDeleteUsersStoresRequest() {
    const { requestClient } = useRequestClient();

    async function deleteUsersStores(
        id?: string
    ): Promise<DefaultReturnServiceType<any>> {
        try {
            const result = await requestClient<UsersStoresSaveType>({
                url: endpointsSmartHintApi.usersStores.delete + "/" + id,
                method: "DELETE",
            });

            return {
                status: result.status === 200 ? "OK" : "BAD",
                message: result.message,
                object: result.object,
            };
        } catch (ex) {
            return {
                status: "BAD",
                message: `Ops, não foi possível deletar comprador com id ${id} por problemas técnicos. Contate o suporte!`,
            };
        }
    }

    return { deleteUsersStores };
}
