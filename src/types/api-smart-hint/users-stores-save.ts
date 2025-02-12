export type UsersStoresSaveType = {
    id?: string;
    nameOrCorporateReason: string;
    email: string;
    phoneNumber: string;
    personType: string;
    cpfCnpj: string;
    stateRegistration?: string;
    isExempt: boolean;
    gender: string;
    birthDate?: string;
    isBlocked: boolean;
    password?: string;
    confirmPassword?: string;
    createdAt?: Date;
};
