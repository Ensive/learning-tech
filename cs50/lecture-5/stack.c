const int CAPACITY = 50; // caveat, the number is  finite. how to allocate memory for stack dynamically?

typedef struct
{
  person people[CAPACITY];
  int size;
}
stack;

// CAPACITY how high (big) stack can be
// the current size of the stack

// contiguous, adjacent
// problem: how to solve a proble of growth? for stack?
// copying arrays in memory is inefficient
// the difference between stack and array is that nodes in stack connected through pointing to each other
// stack vs array
