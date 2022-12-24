function vowelsAndConsonants(s) {
  function condition(s, i) {
    return (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "o" ||
      s[i] === "i" ||
      s[i] === "u"
    );
  }
  for (let i = 0; i < s.length; i++) {
    if (condition(s, i)) {
      console.log(s[i]);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (!condition(s, i)) {
      console.log(s[i]);
    }
  }
}
