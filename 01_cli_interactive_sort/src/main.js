import { InputService } from "./service.js";

export function startApp() {
    const inputService = new InputService();
    
    inputService.run();
}
