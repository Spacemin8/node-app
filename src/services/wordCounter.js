"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordCounter = void 0;
class WordCounter {
    countWords(content) {
        return content.split(/\s+/).length;
    }
}
exports.WordCounter = WordCounter;
