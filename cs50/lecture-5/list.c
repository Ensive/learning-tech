#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
  int number;
  struct node *next;
} node;

int main(int argc, char *argv[])
{
  node *list = NULL;

  // we start at 1, because first value in argv is the name of the program
  for (int i = 1; i < argc; i++)
  {
    int number = atoi(argv[i]);

    node *n = malloc(sizeof(node));
    // here, there is a cause for memory leak for second/third fail, you need to do garbage collection by implementing freeList() function
    if (n == NULL)
    {
      return 1;
    }

    n->number = number;
    n->next = NULL; // ?
    n->next = list; // how does this work? why n->next points to list

    list = n;
  }

  // for (node *ptr = list; ptr != NULL; ptr = ptr->next)
  node *ptr = list;
  while (ptr != NULL)
  {
    printf("%i\n", ptr->number);
    ptr = ptr->next;
  }

  ptr = list;

  while(ptr != NULL) {

    // this may cause segmentation fault
    free(ptr);
    ptr = ptr->next;

    // use temp pointer instead
    node *next = ptr->next; // copy value into
    free(ptr);
    ptr = next;
  }

  return 0;
}

// convert string to int

// searching for value in linked list O(n), linear
// to insert element in the list O(1) constant time. why? - no matter how long the list I just can create a little splice in the beginning of the list
// to delete element, O(n)

// stack => prepend O(1)
// queue => append, O(n), you can optimize inserting (append) to have it O(1)
// insert in sorted order append() vs prepend(), it's still O(n)

