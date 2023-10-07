require("core-js");
let language = [
  { name: "JavaScript", type: "Scripting" },
  { name: "Java", type: "normal" },
  { name: "Python", type: "Scripting" },
];
let scriptingLanguage = {};

const result = Object.groupBy(language, ({ type }) => type);
console.log(result);
