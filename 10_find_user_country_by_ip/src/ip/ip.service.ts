import { IP_BASE, HIGH_ORDER_DIGIT, LOW_ORDER_DIGIT, NUMBER_BASE } from "./ip.constants";

export class IpService {
    public ipToDecimal(ip: string): number {
        const octets = ip.split(".");
        const decimalValue = this.getDecimalValue(octets);

        return decimalValue;
    }

    public decimalToIp(decimal: number): string {
        const [ octet1, octet2, octet3, octet4 ] = this.getIpOctets(decimal);

        return `${octet1}.${octet2}.${octet3}.${octet4}`;
    }

    private getDecimalValue(octets: string[]): number {
        let decimalValue = LOW_ORDER_DIGIT;

        for (let index = LOW_ORDER_DIGIT; index <= HIGH_ORDER_DIGIT; index++) {
           decimalValue += parseInt(octets[index], NUMBER_BASE) * Math.pow(IP_BASE, HIGH_ORDER_DIGIT - index);
        }

        return decimalValue;
    }

    private getIpOctets(decimal: number): number[] {
        const octetBucket: number[] = [];

        for (let index = HIGH_ORDER_DIGIT; index >= LOW_ORDER_DIGIT; index--) {
            const octet = Math.floor(decimal / Math.pow(IP_BASE, index));

            decimal = decimal - octet * Math.pow(IP_BASE, index);

            octetBucket.push(octet);
        }

        return octetBucket;
    }
}
