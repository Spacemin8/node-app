export class SpaceCounter {
  public countSpaces(content: string): number {
    return content.split(" ").length - 1;
  }
}
