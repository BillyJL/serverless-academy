import { Request, Response } from "express";
import { LinkShorterService } from "./link-shorter.service";

export class LinkShorterController {
    private readonly linkShorterService: LinkShorterService =
        new LinkShorterService();

    shortenLink(req: Request, res: Response): void {
        try {
            const { url } = req.body;
            new URL(url);

            const shortUrl = this.linkShorterService.shorten(url);
            res.json({ shortUrl });
        } catch (e) {
            res.status(400).json({ error: "Invalid URL" });
            return;
        }
    }

    redirectToOriginalUrl(req: Request, res: Response): void {
        const { shortUrl } = req.body;
        const originalUrl = this.linkShorterService.expand(shortUrl);

        if (originalUrl) {
            res.redirect(originalUrl);
        } else {
            res.status(404).json({ error: "Link not found" });
        }
    }
}
