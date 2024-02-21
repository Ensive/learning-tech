// Given a string "{a: 'value', b: 123, c: true, d: { e: 'value2', f: false}}", return the corresponding JS object
//     {
//         a: 'value',
//         b: 123,
//         c: true,
//         d: { e: 'value2'}
//      }

// I have input string that I need to parse and create object;
// I have to iterate with specific rules;
// I have to store information in particular helpful way;

// What are special chars? {} : '' ,

// I forced my self to sit with the task till finished. Took me another 90 minutes, but I am happy with the solution and it came out naturally. Happy Valentine's Day.

function jsonParse(str) {
  let obj = {};

  const keys = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "{") {
      let k = i + 1;
      let key = "";
      while (str[k] !== ":") {
        key += str[k];
        k++;
      }
      keys.push(key.trim().replace(/\"/gi, ""));
      i = k;
    }

    if (str[i] === ":") {
      let k = i + 1;
      let value = "";
      while (str[k] !== "," && str[k] !== "}") {
        value += str[k];
        k++;
      }
      i = k;

      // handle the value
      value = value.trim();
      if (value[0] === "{") {
        // handle recursive call
        let objValue = value;
        while (str[k] !== "}") {
          objValue += str[k];
          k++;
        }
        let parsedValue = jsonParse(objValue + "}");
        const key = keys.pop();
        obj[key] = parsedValue;
        i = k;
      } else if (value[0] === "'" || value[0] === '"') {
        const key = keys.pop();
        obj[key] = value.replace(/\'/gi, "").replace(/\"/gi, "");
      } else if (value === "true") {
        const key = keys.pop();
        obj[key] = true;
      } else if (value === "false") {
        const key = keys.pop();
        obj[key] = false;
      } else if (value === "null") {
        const key = keys.pop();
        obj[key] = null;
      } else {
        const key = keys.pop();
        obj[key] = +value;
      }
      // TODO: handle other values like array or null
    }

    if (str[i] === ",") {
      let k = i + 1;
      let key = "";
      while (str[k] !== ":") {
        key += str[k];
        k++;
      }
      keys.push(key.trim().replace(/\"/gi, ""));
      i = k - 1;
    }
  }

  return obj;
}

// TODO: separate functions
// isString
// isNumber
// isBoolean

const myObject = jsonParse(
  "{a: 'value', b: 123, c: true, d: { e: 'value2', f: false }}",
);

const testString =
  "{a: 'value', b: 123, c: true, d: {e: 'value2', f: false, g: {h: 456, i: {j: 'value3', k: null, l: {m: 'value4', n: false, o: {p: 789, q: true, r: {s: 'value5', t: 'Done'}}}}}}}";

const validJsonStringForTesting =
  '{"a": "value", "b": 123, "c": true, "d": {"e": "value2", "f": false, "g": {"h": 456, "i": {"j": "value3", "k": null, "l": {"m": "value4", "n": false, "o": {"p": 789, "q": true, "r": {"s": "value5", "t": "Done"}}}}}}}';

const myObject2 = jsonParse(testString);

console.log("myObject :>> ", myObject);
console.log("myObject2 :>> ", myObject2);

console.log(
  "TEST PASSED:",
  JSON.stringify(myObject2) ===
    JSON.stringify(JSON.parse(validJsonStringForTesting)),
);

// complexity
// Time: O(n), where n is length of the string
// Space: O(d + k), where d is depth of nesting, k is number of keys

// What can be improved?
// 1) Better use of data structures (more stacks needed instead of inner loops/recursion) to reduce call stack depth (avoid recursion by replacing with iteration)
// 2) improve structure and readability with separate function instead of nested if/else

// Conclusions
// 1) Order of execution and approaching the task - matters a lot!
// 2) Focus on solving problem step by step instead of too much high level overview, step by step, one step at a time especially in parsing
