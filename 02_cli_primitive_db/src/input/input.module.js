import { InputController } from './input.controller.js';

export class InputModule {
    run() {
        const inputController = new InputController();
        return inputController;
    }
}