import { EmailParser } from "./parser/emailparser";

export class EmailReplyParser {
  read(text) {
    return new EmailParser().parse(text);
  }

  parseReply(text) {
    return this.read(text).getVisibleText();
  }

  parseReplied(text) {
    return this.read(text).getQuotedText();
  }
}
