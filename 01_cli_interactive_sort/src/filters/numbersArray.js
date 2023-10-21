import { filtersFabric } from "./base.js"

export const filterNumbersArray = filtersFabric(item => !isNaN(item));
