const resolveVariables = require("./main");
const map1 = {
  "key1": "foo${key2}bar",
  "key2": "${key3}baz",
  "key3": "${key4}",
  "key4": "${key1}"
};
try {
  console.log(resolveVariables(map1));
} catch (e) {
  console.log(e.message);
};
const map2 = {
  "key1": 123,
  "key2": "${key3}baz",
  "key3": "${key4}k",
  "key4": "${key1}lm"
};
try {
  console.log(resolveVariables(map2));
} catch (e) {
  console.log(e.message);
};
const map3 = {
  "key1": "foo${key2}bar",
  "key2": "${key3}baz",
  "key3": "${key4}",
  "key4": "qux"
};
try {
    console.log(resolveVariables(map3));
  } catch (e) {
    console.log(e.message);
};
const map4 = {
  "key1": "foo${key2}bar",
  "key2": "${key3}baz",
  "key3": "${key4}"
};
try {
  console.log(resolveVariables(map4));
} catch (e) {
  console.log(e.message);
};
