#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  // int 4 bytes
  int *list = malloc(3 * sizeof(int)); // step forward, list as a pointer
  if (list == NULL)
  {
    return 1;
  }

  // *list = 1;
  // *(list + 1) = 2;

  list[0] = 1;
  list[1] = 2;
  list[2] = 3;

  // ...
  int *tmp = malloc(4 * sizeof(int));
  // int list = malloc(4 * sizeof(int)); factual memory leak if we go that road
  if (tmp == NULL)
  {
    free(list);
    return 1;
  }

  for (int i = 0; i < 3; i++) {
    tmp[i] = list [i];
  }

  tmp[3] = 4;
  free(list);
  list = tmp;

  for (int i = 0; i < 10; i++) {
    // printf("%i\n", i);
    printf("%i\n", list[i]);
    printf("%p\n", list[i]); // as a pointer to address in memory
  }

  // cleanup memory
  free(list); // vs free tmp, free(list) matter of good design for humans that read code

  return 0;
}

// if malloc returns null - then there is no memory
