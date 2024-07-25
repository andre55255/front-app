export type ApiSmartHintResponseType<T> = {
    message: string;
    object?: T;
    status: number;
};
