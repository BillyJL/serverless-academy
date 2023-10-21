import { filterNonNumbersArray } from "./filters/nonNumbersArray.js";
import { filterNumbersArray } from "./filters/numbersArray.js";

export function sortAlphabetically(data) {
    const withoutNumbers = filterNonNumbersArray(data);
    return withoutNumbers.sort();
}

export function sortNumbersAsc(data) {
    const onlyNumbers = filterNumbersArray(data);
    return onlyNumbers.sort((a, b) => a - b);
}

export function sortNumbersDesc(data) {
    const onlyNumbers = filterNumbersArray(data);
    return onlyNumbers.sort((a, b) => b - a);
}

export function sortByLength(data) {
    const withoutNumbers = filterNonNumbersArray(data);
    return withoutNumbers.sort((a, b) => a.length - b.length);
}

export function getUniqueValues(data) {
    return Array.from(new Set(data));
}

export function getUniqueWords(data) {
    const withoutNumbers = filterNonNumbersArray(data);
    return getUniqueValues(withoutNumbers);
}
