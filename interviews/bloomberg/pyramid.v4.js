function pyramid(n = 0) {
  const maxStars = n * 2 - 1;

  for (let i = 0; i < maxStars; i++) {
    const starCount = i < n ? i : maxStars - i;
    console.log('*'.repeat(starCount));
  }
}

pyramid(3);
