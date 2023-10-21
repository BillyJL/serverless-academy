import { space } from "../../constants/regularExpression.js";

export function parseSentence(input) {
    return input.trim().split(space);
}