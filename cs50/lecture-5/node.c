#include <stdio.h>
#include <stdlib.h>

// typedef struct node;

typedef struct node
{
  int number;
  struct node *next; // stores address of a note
}
node;

// upside - not copying when adding items, timewise
// downside
  // 1. we use as twice as much memory
  // 2. you cannot index into it, to find a item you have to go through list
  // 3. we cannot use binary search on list, we search linear


// creating a linked list structure
node *list; // with the garbage value
node *list = NULL; // no nodes in the list
node *n = malloc(sizeof(node)); // n with the garbage value, dynamically
(*n).number = 1; // go to number of node instead of * and . can be transformed into ->
n->number = 1;
n->next = NULL; // we now have a list of size 1;
list = n; // point to the first node in the story

node *n = malloc(sizeof(node));
n->number = 2;
n->next = NULL;
// DON'T list = n; // change list pointing to n, but we lost pointer to the other node introduces memory leak
n->next = list; // if list is pointing
// NOW do list = n;
list = n; // success

// number
// next
