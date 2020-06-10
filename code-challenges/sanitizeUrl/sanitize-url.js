"use strict";

const sanitizeUrl1 = (url) => {
  let result = "";
  for (let i = 0; i < url.length; i++) {
    let currentLetter = url[i];
    result += currentLetter === " " ? "%20" : currentLetter;
  }
  return result;
};

const sanitizeUrl2 = (url) => {
  return url.split(" ").join("%20");
};

const sanitizeUrl3 = (url) => {
  return url.replace(/\ /g, "%20");
};

module.exports = { sanitizeUrl1, sanitizeUrl2, sanitizeUrl3 };
