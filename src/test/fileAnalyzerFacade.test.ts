import { expect } from "chai";
import { describe, it } from "mocha";
import fs from "fs";
import path from "path";
import { FileAnalyzerFacade } from "../facade/fileAnalyzerFacade";

describe("FileAnalyzerFacade", () => {
  const testFilePath = path.join(__dirname, "testFile.txt");

  before(() => {
    const testContent = `
      This is a test file.
      This file is used to test the FileAnalyzerFacade.
      The word test is repeated several times in this test file to test the functionality.
      test test test test test test test test test test test test
    `;
    fs.writeFileSync(testFilePath, testContent);
  });

  after(() => {
    fs.unlinkSync(testFilePath);
  });

  it("should analyze a file correctly", async () => {
    const facade = new FileAnalyzerFacade();
    const result = await facade.analyzeFile(testFilePath);

    expect(result.wordCount).to.equal(34);
    expect(result.letterCount).to.equal(140);
    expect(result.spaceCount).to.equal(33);
    expect(result.repeatedWords).to.have.property("test", 12);
  });
});
