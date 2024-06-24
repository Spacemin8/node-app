"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LetterCounter = void 0;
class LetterCounter {
    countLetters(content) {
        return content.replace(/[^a-zA-Z]/g, "").length;
    }
}
exports.LetterCounter = LetterCounter;
