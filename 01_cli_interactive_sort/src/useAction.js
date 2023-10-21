import {
    sortAlphabetically,
    sortNumbersAsc,
    sortNumbersDesc,
    sortByLength,
    getUniqueValues,
    getUniqueWords,
} from "./sorting.js";

export function useAction(data, selectedSort) {
    switch (selectedSort) {
        case "1":
            return sortAlphabetically(data);
        case "2":
            return sortNumbersAsc(data);
        case "3":
            return sortNumbersDesc(data);
        case "4":
            return sortByLength(data);
        case "5":
            return getUniqueWords(data);
        case "6":
            return getUniqueValues(data);
        default: 
            return data;
    }
}
