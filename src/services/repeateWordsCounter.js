"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepeatedWordsCounter = void 0;
class RepeatedWordsCounter {
    findRepeatedWords(content) {
        const words = content.split(/\s+/);
        const wordMap = {};
        words.forEach((word) => {
            if (wordMap[word]) {
                wordMap[word]++;
            }
            else {
                wordMap[word] = 1;
            }
        });
        const repeatedWords = {};
        for (const [word, count] of Object.entries(wordMap)) {
            if (count > 10) {
                repeatedWords[word] = count;
            }
        }
        return repeatedWords;
    }
}
exports.RepeatedWordsCounter = RepeatedWordsCounter;
