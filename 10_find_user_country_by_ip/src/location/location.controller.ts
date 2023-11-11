import { Request, Response } from "express";
import { IpService } from "../ip/ip.service";
import { LocationService } from "./location.service";
import { CsvService } from "../csv/csv.service";
import { appConfig } from "../config/app";
import { IPDatabaseEntry } from "../core";

export class LocationController {
    private locationService: LocationService = new LocationService();
    private ipService: IpService = new IpService();
    private csvService: CsvService<IPDatabaseEntry[]> = new CsvService();

    public async detectLocation(
        req: Request,
        res: Response
    ): Promise<Response> {
        const { ip } = req;

        if (!ip) {
            return res.status(404);
        }

        const { ipLocationFile } = appConfig;

        const decimalIp = this.ipService.ipToDecimal(ip);

        const database = await this.csvService.readCsv(ipLocationFile);

        const location = this.locationService.detectLocation(
            decimalIp,
            database
        );

        if (!location) {
            return res.status(404);
        }

        return res.status(200).json({
            userIp: ip,
            ipRangeStart: this.ipService.decimalToIp(location.ipRangeStart),
            ipRangeEnd: this.ipService.decimalToIp(location.ipRangeEnd),
            countryCode: location.countryCode,
            countryName: location.countryName,
        });
    }
}
