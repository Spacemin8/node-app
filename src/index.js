"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileAnalyzerFacade_1 = require("./facade/fileAnalyzerFacade");
const filePath = process.argv[2];
console.log(filePath);
if (!filePath) {
    console.error("Please provide a file path");
    process.exit(1);
}
const fileAnalyzer = new fileAnalyzerFacade_1.FileAnalyzerFacade();
const analysisResult = fileAnalyzer.analyzeFile(filePath);
console.log("Analysis Result:", analysisResult);
