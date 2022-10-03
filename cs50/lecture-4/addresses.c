#include <stdio.h>

// typedef struct
// {
//   char* name;
//   char* number;
// }
// person;

typedef int integer;
typedef char *string;

int main(void)
{
  int n = 50;
  int *p = n;

  printf("%i\n", n);
  printf("%p\n", p);
}
