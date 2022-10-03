#include <stdio.h>

int main(void)
{
  int list [4];

  list[0] = 1;
  list[1] = 2;
  list[2] = 3;
  list[3] = 4;

  for (int i = 0; i < 4; i++) {
    printf("%i\n", i);
  }
}

// todo: allocate memory dynamically using malloc();

