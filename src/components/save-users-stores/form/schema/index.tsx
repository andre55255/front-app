import * as yup from "yup";

export const formSaveUsersStoresSchema = yup.object({
    nameOrCorporateReason: yup
        .string()
        .required("Campo obrigatório")
        .max(150, "Pode ter no máximo 150 caracteres"),
    email: yup
        .string()
        .required("Campo obrigatório")
        .max(150, "Pode ter no máximo 150 caracteres")
        .email("Email inválido"),
    phoneNumber: yup.string().required("Campo obrigatório"),
    personType: yup.string().required("Campo obrigatório"),
    cpfCnpj: yup.string().required("Campo obrigatório"),
    stateRegistration: yup.string().nullable(),
    isExempt: yup.boolean().required("Campo obrigatório"),
    gender: yup.string().nullable(),
    birthDate: yup.string().nullable(),
    isBlocked: yup.boolean().required("Campo obrigatório"),
    password: yup.string().nullable(),
    confirmPassword: yup.string().nullable(),
});
