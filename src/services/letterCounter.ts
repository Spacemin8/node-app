export class LetterCounter {
  public countLetters(content: string): number {
    return content.replace(/[^a-zA-Z]/g, "").length;
  }
}
