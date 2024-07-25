import axios, { AxiosError, AxiosRequestConfig } from "axios";
import useConfigSmartHintApi from "./api";
import { ApiSmartHintResponseType } from "../../../types/api-smart-hint/_base-response";

type RequestProps = {
    method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH";
    url: string;
    data?: object | undefined;
    query?: object;
    signal?: AbortSignal | undefined;
};

export function useRequestClient() {
    const { apiSmartHint } = useConfigSmartHintApi();

    async function requestClient<T>(
        requestInfo: RequestProps
    ): Promise<ApiSmartHintResponseType<T>> {
        try {
            const configRequest: AxiosRequestConfig<any> = {};
            configRequest.url = requestInfo.url;
            configRequest.method = requestInfo.method;
            configRequest.data = requestInfo.data;
            configRequest.params = requestInfo.query;
            configRequest.signal = requestInfo.signal;

            try {
                const response = await apiSmartHint<
                    ApiSmartHintResponseType<T>
                >(configRequest);
                response.data.status = response.status;
                return response.data;
            } catch (ex) {
                if (axios.isCancel(ex)) {
                    return {
                        status: 204,
                        message: "Requisição cancelada",
                    };
                } else if (axios.isAxiosError(ex)) {
                    const exAxios = ex as AxiosError;

                    let responseData = exAxios.response
                        ?.data as ApiSmartHintResponseType<T>;

                    if (!responseData) {
                        responseData = {
                            status: exAxios.response?.status!!,
                            message:
                                ex.response?.status === 401
                                    ? "Não autorizado, faça login novamente"
                                    : ex.response?.status === 403
                                    ? "Acesso negado"
                                    : `Ops, falha inesperada ao realizar requisição. Desculpe-nos pelo transtorno. (${ex})`,
                        };
                    }
                    responseData.status = exAxios.response?.status!!;
                    return responseData;
                }
                throw new Error(
                    `Ops, falha inesperada ao realizar requisição. Desculpe-nos pelo transtorno. (${ex})`
                );
            }
        } catch (ex) {
            const message = `Ops, falha inesperada ao realizar requisição. Desculpe-nos pelo transtorno. (${ex})`;
            return {
                message,
                status: 500,
            };
        }
    }

    return { requestClient };
}
