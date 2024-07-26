import { endpointsSmartHintApi } from "../../../helpers/constants";
import {
    isValidDatePtBr,
    parseDateToISO,
    removeMaskedString,
} from "../../../helpers/methods-helpers";
import { UsersStoresSaveType } from "../../../types/api-smart-hint/users-stores-save";
import { DefaultReturnServiceType } from "../../../types/utils/default-return-service";
import { useRequestClient } from "../_configs/request-client";

export default function useCreateUsersStoresRequest() {
    const { requestClient } = useRequestClient();

    async function createUsersStores(
        data: UsersStoresSaveType
    ): Promise<DefaultReturnServiceType<any>> {
        try {
            const parsedDataRequest: UsersStoresSaveType = {
                ...data,
                phoneNumber: removeMaskedString(data.phoneNumber),
                cpfCnpj: removeMaskedString(data.cpfCnpj),
                stateRegistration:
                    data.stateRegistration &&
                    removeMaskedString(data.stateRegistration),
                birthDate: data.birthDate && parseDateToISO(data.birthDate),
            };

            if (
                parsedDataRequest.personType === "F" &&
                parsedDataRequest.birthDate &&
                !isValidDatePtBr(parsedDataRequest.birthDate)
            ) {
                return {
                    status: "BAD",
                    message: "Data de nascimento informada inválida",
                };
            }

            if (
                parsedDataRequest.confirmPassword != parsedDataRequest.password
            ) {
                return {
                    status: "BAD",
                    message: "Senhas não conferem",
                };
            }

            const result = await requestClient<any>({
                url: endpointsSmartHintApi.usersStores.create,
                method: "POST",
                data: parsedDataRequest,
            });

            return {
                status: result.status === 201 ? "OK" : "BAD",
                message: result.message,
                object: result.object,
            };
        } catch (ex) {
            return {
                status: "BAD",
                message:
                    "Ops, não foi possível criar comprador por problemas técnicos. Contate o suporte!",
            };
        }
    }

    return { createUsersStores };
}
