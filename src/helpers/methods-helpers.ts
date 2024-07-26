import moment from "moment";

export function filterByIndexes<T>(data: T[], indexes: number[]) {
    return data.filter((_, index) => indexes.includes(index));
}

export function formatStrToDatePtBr(dateStr: string) {
    try {
        return moment(dateStr).format("DD/MM/YYYY");
    } catch (ex) {
        return dateStr;
    }
}

export function formatStrToDateTimePtBr(dateStr: string) {
    try {
        return moment(dateStr).format("DD/MM/YYYY HH:mm");
    } catch (ex) {
        return dateStr;
    }
}

export function formatDatePtBr(date: Date) {
    return moment(date).format("DD/MM/YYYY");
}

export function formatDateTimePtBr(date: Date) {
    return moment(date).format("DD/MM/YYYY HH:mm");
}

export function formatPhoneNumberPtBr(phoneNumber: string) {
    if (phoneNumber.length !== 11) {
        return phoneNumber;
    }

    const ddd = phoneNumber.slice(0, 2); // 31
    const firstPart = phoneNumber.slice(2, 3); // 9
    const secondPart = phoneNumber.slice(3, 7); // 9560
    const thirdPart = phoneNumber.slice(7); // 0166

    const formattedNumber = `(${ddd}) ${firstPart} ${secondPart}-${thirdPart}`;
    return formattedNumber;
}

export function setIsInvalidFormik(
    touched: boolean | undefined,
    errors: string | undefined
) {
    return touched && errors ? true : false;
}

export function removeMaskedString(val: string) {
    if (val) {
        return val.replace(/[^a-zA-Z0-9]/g, "");
    } else {
        return val;
    }
}

export const parseDateToISO = (dateString: string) => {
    try {
        const inputFormat = "DD/MM/YYYY";
        const outputFormat = "YYYY-MM-DD";

        const date = moment(dateString, inputFormat, true);

        if (!date.isValid()) {
            return dateString;
        }

        return date.format(outputFormat);
    } catch (ex) {
        return dateString;
    }
};

export function isValidDatePtBr(dateStr: string) {
    try {
        return moment(dateStr, "DD/MM/YYYY", true).isValid();
    } catch (ex) {
        return false;
    }
}

export function formatCPF(cpf: string) {
    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11) {
        return cpf;
    }

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function formatCNPJ(cnpj: string) {
    cnpj = cnpj.replace(/\D/g, "");

    if (cnpj.length !== 14) {
        return cnpj;
    }

    return cnpj.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        "$1.$2.$3/$4-$5"
    );
}

export function formatStateRegistration(stateRegistration: string) {
    stateRegistration = stateRegistration.replace(/[^a-zA-Z0-9]/g, '');

    if (stateRegistration.length < 12) {
        return stateRegistration;
    }
  
    return stateRegistration.replace(/(.{3})(.{3})(.{3})(.{3})/, '$1.$2.$3.$4');
}