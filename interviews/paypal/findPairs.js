/*
You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.

Write a function that takes in a collection of (student ID number, course name) pairs and returns, for every pair of students, a collection of all courses they share.

Sample Input:

enrollments1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]

Sample Output (pseudocode, in any order):

find_pairs(enrollments1) =>
{
  "58,17": ["Software Design", "Linear Algebra"]
  "58,94": ["Economics"]
  "58,25": ["Economics"]
  "94,25": ["Economics"]
  "17,94": []
  "17,25": []
}

Additional test cases:

Sample Input:

enrollments2 = [
  ["0", "Advanced Mechanics"],
  ["0", "Art History"],
  ["1", "Course 1"],
  ["1", "Course 2"],
  ["2", "Computer Architecture"],
  ["3", "Course 1"],
  ["3", "Course 2"],
  ["4", "Algorithms"]
]

Sample output:

find_pairs(enrollments2) =>
{
  "1,0":[]
  "2,0":[]
  "2,1":[]
  "3,0":[]
  "3,1":["Course 1", "Course 2"]
  "3,2":[]
  "4,0":[]
  "4,1":[]
  "4,2":[]
  "4,3":[]
}

Sample Input:
enrollments3 = [
  ["23", "Software Design"],
  ["3", "Advanced Mechanics"],
  ["2", "Art History"],
  ["33", "Another"],
]

Sample output:

find_pairs(enrollments3) =>
{
  "23,3": []
  "23,2": []
  "23,33":[]
  "3,2":  []
  "3,33": []
  "2,33": []
}

All Test Cases:
find_pairs(enrollments1)
find_pairs(enrollments2)
find_pairs(enrollments3)

Complexity analysis variables:

n: number of student,course pairs in the input
s: number of students
c: total number of courses being offered (note: The number of courses any student can take is bounded by a small constant)
*/
"use strict";

const enrollments1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"]
];

const enrollments2 = [
  ["0", "Advanced Mechanics"],
  ["0", "Art History"],
  ["1", "Course 1"],
  ["1", "Course 2"],
  ["2", "Computer Architecture"],
  ["3", "Course 1"],
  ["3", "Course 2"],
  ["4", "Algorithms"]
];

const enrollments3 = [
  ["23", "Software Design"],
  ["3",  "Advanced Mechanics"],
  ["2",  "Art History"],
  ["33", "Another"]
];


// input is: studentId: subject
// how do we form all possible pairs?
// at the same time track common subjects
// iteratively go through each item; what do we do at each step?
  // what kind of checks I do here?
  // try to form a pair with the closest
  //
  // does pair exist? yes -> does common subject already added? shall we use Set() then in JS
  // no -> form a pair, is the subject common? -> add;
// output: map; key a pair, value is common subjects


// const enrollments1 = [
//   ["58", "Linear Algebra"],
//   ["94", "Art History"],
//   ["94", "Operating Systems"],
//   ["17", "Software Design"],
//   ["58", "Mechanics"],
//   ["58", "Economics"],
//   ["17", "Linear Algebra"],
//   ["17", "Political Science"],
//   ["94", "Economics"],
//   ["25", "Economics"],
//   ["58", "Software Design"]
// ];

function findPairs(list) {
  // console.log("list", list);
  let result = {

  };

  for (let i = 0; i < list.length; i++) {
    // check edge cases here; to make sure with include all items
    for (let k = 0; k < list.length; k++) {
      const student1 = list[i]; const student1Id = list[i][0];
      const student2 = list[k]; const student2Id = list[k][0]
      if (student1Id === student2Id) continue;

      const student1Subject = list[i][1];
      const student2Subject = list[k][1];

      const pairKey = `${student1Id},${student2Id}`;
      const pairKeyReverse = `${student2Id},${student1Id}`;

      if (!result[pairKey] && !result[pairKeyReverse]) {
        result[pairKey] = new Set();
        if (student1Subject === student2Subject) {
          (result[pairKey] || result[pairKeyReverse]).add(student1Subject);
        }

      } else if (student1Subject === student2Subject) {
        (result[pairKey] || result[pairKeyReverse]).add(student1Subject);
      }
    }
  }

  return result;
}

const result1 = findPairs(enrollments1);
const result2 = findPairs(enrollments2);
const result3 = findPairs(enrollments3);

console.log("result1", result1)
console.log("result2", result2)
console.log("result3", result3)
