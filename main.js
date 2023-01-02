// Coded by : Issam Chabat aka IceColdX302
// 01/01/2023
// Amadeus Assessement

function resolveVariables(map) {
    function resolve(str, usedKeys = []) {
      // Find the start and end index of the variable
      const startIndex = str.indexOf("${");
      const endIndex = str.indexOf("}", startIndex);
      // If no variable is found, return the original string
      if (startIndex === -1 || endIndex === -1) return str;
      // Extract the variable key
      const key = str.substring(startIndex + 2, endIndex);
      // If the key has already been visited, throw an exception, because otherwise we have an infinite loop
      if (usedKeys.includes(key)) {
        throw new Error(`Circular reference detected at : ${key}`);
      }
      // If the key is not in the map, throw an exception
      if (!map.hasOwnProperty(key)) {
        throw new Error(`Key not found in the map: ${key}`);
      }
      // If the value of the key is not a string, throw an exception
      if (typeof map[key] !== "string") {
        throw new Error(`Invalid value for key: ${key}`);
      }
      // Substitute the variable with its value and resolve the resulting string
      return resolve(str.replace(`\${${key}}`, map[key]), [...usedKeys, key]);
    }
  
    // Iterate over the keys in the map and resolve their variables
    for (const key in map) {  
      if (!map.hasOwnProperty(key)) {
        throw new Error(`Key not found in the map: ${key}`);
      }
      // If the value of the key is not a string, throw an exception
      if (typeof map[key] !== "string") {
        throw new Error(`Invalid value for key: ${key}`);
      }  
      map[key] = resolve(map[key]);
    }
    return map;
  }
module.exports = resolveVariables;
  
