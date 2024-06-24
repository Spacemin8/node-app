"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileAnalyzerFacade = void 0;
const fileReader_1 = require("../services/fileReader");
const letterCounter_1 = require("../services/letterCounter");
const repeateWordsCounter_1 = require("../services/repeateWordsCounter");
const spaceCounter_1 = require("../services/spaceCounter");
const wordCounter_1 = require("../services/wordCounter");
class FileAnalyzerFacade {
    constructor() {
        this.fileReader = new fileReader_1.FIleReader();
        this.letterCounter = new letterCounter_1.LetterCounter();
        this.spaceCounter = new spaceCounter_1.SpaceCounter();
        this.repeatWordsCounter = new repeateWordsCounter_1.RepeatedWordsCounter();
        this.wordCounter = new wordCounter_1.WordCounter();
    }
    analyzeFile(filePath) {
        const content = this.fileReader.readFile(filePath);
        const wordCount = this.wordCounter.countWords(content);
        const letterCount = this.letterCounter.countLetters(content);
        const spaceCount = this.spaceCounter.countSpaces(content);
        const repeatedWords = this.repeatWordsCounter.findRepeatedWords(content);
        return {
            wordCount,
            letterCount,
            spaceCount,
            repeatedWords,
        };
    }
}
exports.FileAnalyzerFacade = FileAnalyzerFacade;
