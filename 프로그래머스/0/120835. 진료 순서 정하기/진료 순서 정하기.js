function solution(emergency) {
  let answer = [];

  let b = [...emergency];
  b = b.sort((a, b) => b - a);

  for (let i = 0; i < emergency.length; i++) {
    emergency[i] = b.indexOf(emergency[i]) + 1;
  }

  return (answer = emergency);
}