export type DefaultReturnServiceType<T> = {
    status: "OK" | "BAD" | "FORBIDDEN" | "UNAUTHORIZED";
    message: string;
    object?: T | undefined;
}