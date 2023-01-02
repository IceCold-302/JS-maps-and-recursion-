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
}
// Output: "Circular reference detected: key1"

const map2 = {
  "key1": 123,
  "key2": "${key3}baz",
  "key3": "${key4}",
  "key4": "${key1}"
};
try {
  console.log(resolveVariables(map2));
} catch (e) {
  console.log(e.message);
}
// Output: "Invalid value for key: key1"

const map3 = {
  "key1": "foo${key2}bar",
  "key2": "${key3}baz",
  "key3": "${key4}",
  "key4": "qux"
};
console.log(resolveVariables(map3));

const map4 = {
  "key1": "foo${key2}bar",
  "key2": "${key3}baz$",
  "key3": "${key4}",
  "key4": "qux"
};
console.log(resolveVariables(map4));

const map5 = {
  "key1": "foo${key2}bar",
  "key2": "${key3}baz",
  "key3": "${key4}"
};
console.log(resolveVariables(map5));
// Key not found 
const map6 = {
  "key1": "foo${key2}bar",
  "key2": "${key3}baz",
  "key3": "${key4}", }
console.log(resolveVariables(map6))
