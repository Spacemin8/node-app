import { FileAnalyzerFacade } from "./facade/fileAnalyzerFacade";

const filePath = process.argv[2];
console.log(filePath);

if (!filePath) {
  console.error("Please provide a file path");
  process.exit(1);
}

const fileAnalyzer = new FileAnalyzerFacade();
const analysisResult = fileAnalyzer.analyzeFile(filePath);

console.log("Analysis Result:", analysisResult);
