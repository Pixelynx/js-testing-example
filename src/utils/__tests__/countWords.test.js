import countWords from "../countWords";

describe("countWords", () => {
  it("counts the words in an unpuncuated text", () => {
    const text = "One two three four five six";
    const numWords = countWords(text);
    expect(numWords).toBe(6);
  });

  it("does not count whitespace", () => {
    // eslint-disable-next-line no-unused-vars
    const text = `   Hello
        This text
    has   lots of
    whitespace


    `;
    // write your act and assertion here
    const numWords = countWords(text);
    expect(numWords).toBe(7);
  });

  it("counts words with non-ascii characters (emoji, Chinese, etc)", () => {
    const text = "I ♥️ 🧀 🍕!";
    const countsNonAscii = countWords(text);
    expect(countsNonAscii).toBe(4);
  });

  it("throws an error if the text is undefined", () => {
    /*
     * Write your test here.
     * Hint: https://jestjs.io/docs/en/expect#tothrowerror
     */

    const text = undefined;
    //  const throwsERR = () => countWords(text);
    //  expect(throwsERR).toThrow(new Error("Your text seems to be blank. Please type something and try again."))

    expect(() => countWords(text)).toThrowError(
      "Your text seems to be blank. Please type something and try again."
    );
  });

  // Write more tests here!
});
