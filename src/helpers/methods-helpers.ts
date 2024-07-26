import { FormikErrors, FormikTouched } from "formik";
import moment from "moment";

export function filterByIndexes<T>(data: T[], indexes: number[]) {
    return data.filter((_, index) => indexes.includes(index));
}

export function formatDatePtBr(date: Date) {
    return moment(date).format("DD/MM/YYYY");
}

export function formatPhoneNumberPtBr(phoneNumber: string) {
    if (phoneNumber.length !== 11) {
        return phoneNumber;
    }

    const ddd = phoneNumber.slice(0, 2);      // 31
    const firstPart = phoneNumber.slice(2, 3); // 9
    const secondPart = phoneNumber.slice(3, 7); // 9560
    const thirdPart = phoneNumber.slice(7);    // 0166

    const formattedNumber = `(${ddd}) ${firstPart} ${secondPart}-${thirdPart}`;
    return formattedNumber;
}

export function setIsInvalidFormik(touched: boolean | undefined, errors: string | undefined) {
    return touched && errors ? true : false;
}