import { IPDatabaseEntry } from "../core";
import { Location } from "./interfaces";

export class LocationService {
    public detectLocation(convertedIp: number, ipDatabase: IPDatabaseEntry[]): Location | undefined {
        let left = 0;
        let right = ipDatabase.length - 1;

        while (left <= right) {
            const middleIndex = Math.floor((left + right) / 2);

            const middleIp = ipDatabase[middleIndex];
            const { start, end, countryCode, countryName } = middleIp;

            if (convertedIp >= start && convertedIp <= end) {
                return {
                    ip: convertedIp,
                    ipRangeStart: start,
                    ipRangeEnd: end,
                    countryCode,
                    countryName,
                };
            } else if (convertedIp < start) {
                right = middleIndex - 1;
            } else {
                left = middleIndex + 1;
            }
        }
    }
}
