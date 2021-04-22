// const assert = require('assert');

const getAge = dobYear => {
  return {
    age: () => new Date().getFullYear() - dobYear
  };
};

const age = getAge(1992).age();
