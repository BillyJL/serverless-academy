import { fetchData } from "./fetchData.js";

export async function processEndpoints(endpoints) {
    let trueCount = 0;
    let falseCount = 0;

    for (const endpoint of endpoints) {
        try {
            const data = JSON.stringify(await fetchData(endpoint));
            if (data.includes('"isDone":true')) {
                trueCount++;
                console.log(`[Success] ${endpoint}: isDone - true`);
            } else {
                falseCount++;
                console.log(`[Success] ${endpoint}: isDone - false`);
            }
        } catch (error) {
            console.error(`[Fail] ${endpoint}: The endpoint is unavailable`);
        }
    }

    return { trueCount, falseCount };
}
