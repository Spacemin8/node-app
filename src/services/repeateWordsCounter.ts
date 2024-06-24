export class RepeatedWordsCounter {
  public findRepeatedWords(content: string): Record<string, number> {
    const words = content.split(/\s+/);
    const wordMap: Record<string, number> = {};

    words.forEach((word) => {
      if (wordMap[word]) {
        wordMap[word]++;
      } else {
        wordMap[word] = 1;
      }
    });

    const repeatedWords: Record<string, number> = {};
    for (const [word, count] of Object.entries(wordMap)) {
      if (count > 10) {
        repeatedWords[word] = count;
      }
    }

    return repeatedWords;
  }
}
