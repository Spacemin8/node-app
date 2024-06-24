import fs from "fs";

export class FIleReader {
  public readFile(filePath: string): string {
    return fs.readFileSync(filePath, "utf8");
  }
}
