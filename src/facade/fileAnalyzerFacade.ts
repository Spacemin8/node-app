import { FIleReader } from "../services/fileReader";
import { LetterCounter } from "../services/letterCounter";
import { RepeatedWordsCounter } from "../services/repeateWordsCounter";
import { SpaceCounter } from "../services/spaceCounter";
import { WordCounter } from "../services/wordCounter";

export class FileAnalyzerFacade {
  private fileReader: FIleReader;
  private letterCounter: LetterCounter;
  private spaceCounter: SpaceCounter;
  private wordCounter: WordCounter;
  private repeatWordsCounter: RepeatedWordsCounter;

  constructor() {
    this.fileReader = new FIleReader();
    this.letterCounter = new LetterCounter();
    this.spaceCounter = new SpaceCounter();
    this.repeatWordsCounter = new RepeatedWordsCounter();
    this.wordCounter = new WordCounter();
  }

  public analyzeFile(filePath: string) {
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
