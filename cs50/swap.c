// swap
#include <stdio.h>

void swap(int a, int b);

int main(void)
{
  int x = 1;
  int y = 2;

  printf("x is %i, y is %i\n", x, y);
  swap(x, y);
  printf("x is %i, y is %i\n", x, y);
}

void swap(int a, int b)
{
  int tmp = a; // tmp = 1
  a = b; // a = 2
  b = tmp; // b = 1

  // free(tmp);
}
