"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const fileAnalyzerFacade_1 = require("../facade/fileAnalyzerFacade");
(0, mocha_1.describe)("FileAnalyzerFacade", () => {
    const testFilePath = path_1.default.join(__dirname, "testFile.txt");
    before(() => {
        const testContent = `
      This is a test file.
      This file is used to test the FileAnalyzerFacade.
      The word test is repeated several times in this test file to test the functionality.
      test test test test test test test test test test test test
    `;
        fs_1.default.writeFileSync(testFilePath, testContent);
    });
    after(() => {
        fs_1.default.unlinkSync(testFilePath);
    });
    (0, mocha_1.it)("should analyze a file correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        const facade = new fileAnalyzerFacade_1.FileAnalyzerFacade();
        const result = yield facade.analyzeFile(testFilePath);
        (0, chai_1.expect)(result.wordCount).to.equal(34);
        (0, chai_1.expect)(result.letterCount).to.equal(140);
        (0, chai_1.expect)(result.spaceCount).to.equal(33);
        (0, chai_1.expect)(result.repeatedWords).to.have.property("test", 12);
    }));
});
