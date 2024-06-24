"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceCounter = void 0;
class SpaceCounter {
    countSpaces(content) {
        return content.split(" ").length - 1;
    }
}
exports.SpaceCounter = SpaceCounter;
