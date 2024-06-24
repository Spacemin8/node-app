export class WordCounter {
  public countWords(content: string): number {
    return content.split(/\s+/).length;
  }
}
