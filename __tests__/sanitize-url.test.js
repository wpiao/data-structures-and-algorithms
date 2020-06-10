const {
  sanitizeUrl1,
  sanitizeUrl2,
  sanitizeUrl3,
} = require("../code-challenges/sanitizeUrl/sanitize-url.js");

describe("sanitize spaces in a URL", () => {
  it("should replace space in url with %20", () => {
    const url = "http://code.org/hour of code.html";

    expect(sanitizeUrl1(url)).toEqual("http://code.org/hour%20of%20code.html");
    expect(sanitizeUrl2(url)).toEqual("http://code.org/hour%20of%20code.html");
    expect(sanitizeUrl3(url)).toEqual("http://code.org/hour%20of%20code.html");
  });
});
