import { filtersFabric } from "./base.js"

export const filterNonNumbersArray = filtersFabric(item => isNaN(item));