#include <stdio.h>

// typedef struct
// {
//   string name;
//   string number;
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
