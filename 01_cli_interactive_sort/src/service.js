import readline from "readline";
import { appConfig } from "../config/app.js";
import { useAction } from "./useAction.js";
import { parseSentence } from "./util/parseSentence.js";
import { questionsConfig } from "../config/questions.js";

export class InputService {
    input = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    run() {
        const { sentenceQuestion } = questionsConfig;

        this.input.question(sentenceQuestion, (sentence) =>
            this.handleSentence(sentence)
        );
    }

    handleSentence(sentence) {
        const inputData = parseSentence(sentence);
        const { sortingQuestion } = questionsConfig;

        this.input.question(sortingQuestion, (selectedAction) =>
            this.handleSelectedAction(selectedAction, inputData)
        );
    }

    handleSelectedAction(selectedAction, inputData) {
        this.handleExitAction(selectedAction);

        const sortedData = useAction(inputData, selectedAction);

        console.log("Sorted data:", sortedData);

        this.run();
    }

    handleExitAction(action) {
        const { exitAction } = appConfig;

        if (action === exitAction) {
            this.input.close();
            process.exit();
        }
    }
}
