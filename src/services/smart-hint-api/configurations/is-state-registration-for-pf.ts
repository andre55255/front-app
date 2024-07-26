import { endpointsSmartHintApi } from "../../../helpers/constants";
import { DefaultReturnServiceType } from "../../../types/utils/default-return-service";
import { useRequestClient } from "../_configs/request-client";

export default function useCheckIsStateRegistrationForPFRequest() {
    const { requestClient } = useRequestClient();

    async function checkIsStateRegistrationForPF(): Promise<
        DefaultReturnServiceType<boolean>
    > {
        try {
            const result = await requestClient<boolean>({
                url: endpointsSmartHintApi.configurations
                    .isStateRegistrationForPF,
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
                    "Ops, não foi possível verificar configuração de inscrição estadual problemas técnicos. Contate o suporte!",
            };
        }
    }

    return { checkIsStateRegistrationForPF };
}
