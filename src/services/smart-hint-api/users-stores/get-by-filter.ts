import { endpointsSmartHintApi } from "../../../helpers/constants";
import { UsersStoresFilterType } from "../../../types/api-smart-hint/users-stores-filter";
import { UsersStoresGetType } from "../../../types/api-smart-hint/users-stores-get";
import { DefaultReturnServiceType } from "../../../types/utils/default-return-service";
import { useRequestClient } from "../_configs/request-client";

export default function useGetByFilterUsersStoresRequest() {
    const { requestClient } = useRequestClient();

    async function getByFilterUsersStores(
        data: UsersStoresFilterType
    ): Promise<DefaultReturnServiceType<UsersStoresGetType[]>> {
        try {
            const filterParsed: UsersStoresFilterType = {};

            if (data.CpfCnpj)
                filterParsed.CpfCnpj = data.CpfCnpj;

            if (data.Email)
                filterParsed.Email = data.Email;

            if (data.IsBlocked)
                filterParsed.IsBlocked = data.IsBlocked;

            if (data.NameOrCorporateReason)
                filterParsed.NameOrCorporateReason = data.NameOrCorporateReason;

            if (data.PersonType && data.PersonType !== "0")
                filterParsed.PersonType = data.PersonType;

            if (data.PhoneNumber)
                filterParsed.PhoneNumber = data.PhoneNumber;

            if (data.StateRegistration)
                filterParsed.StateRegistration = data.StateRegistration;

            const result = await requestClient<UsersStoresGetType[]>({
                url: endpointsSmartHintApi.usersStores.getByFilter,
                method: "GET",
                query: filterParsed,
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
                    "Ops, não foi possível listar compradores filtrados por problemas técnicos. Contate o suporte!",
            };
        }
    }

    return { getByFilterUsersStores };
}
