function solution(age) {
  var answer = [];
  const text = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  for (let value of age.toString().split('')) {
    answer.push(text[value]);
  }

  return answer.join('');
}
