"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIleReader = void 0;
const fs_1 = __importDefault(require("fs"));
class FIleReader {
    readFile(filePath) {
        return fs_1.default.readFileSync(filePath, "utf8");
    }
}
exports.FIleReader = FIleReader;
