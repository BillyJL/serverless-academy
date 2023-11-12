import crypto from "crypto";
import { appConfig } from "../config/app";

export class LinkShorterService {
    private readonly links: Map<string, string> = new Map();

    shorten(url: string): string {
        const hash = crypto
            .createHash("md5")
            .update(url)
            .digest("hex")
            .slice(0, 8);
        const { domainName } = appConfig;
        const shortUrl = `${domainName}/${hash}`;
        this.links.set(shortUrl, url);
        return shortUrl;
    }

    expand(shortUrl: string): string | null {
        return this.links.get(shortUrl) || null;
    }
}
