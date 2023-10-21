export function filtersFabric(callback) {
    return (inputArray) => {
        return inputArray.filter(callback);
    }
}
