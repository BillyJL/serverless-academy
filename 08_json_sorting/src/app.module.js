import { endpointsConfig } from "./config/endpoints.js";
import { processEndpoints } from "./utils/processEndpoints.js";

export class AppModule {
    async run() {
        const {endpointsArray} = endpointsConfig;
        const { trueCount, falseCount } = await processEndpoints(endpointsArray);
    
        console.log(`Found True values: ${trueCount}`);
        console.log(`Found False values: ${falseCount}`);

        process.exit();
    }
}
