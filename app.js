let userName = prompt('Please enter your name');
let birthYear = +prompt('Please enter  your year of birth');
let currentYear = +prompt('Please enter the current year');
console.log('birthYear', birthYear);
console.log('currentYear', currentYear);

function quest(a, b) {
  let age = b - a;
  // console.log(age);
  alert(userName + ' Your age is ' + age);
  return age;
}

quest(birthYear, currentYear);
console.log(
  userName + ' You are ' + quest(birthYear, currentYear) + ' years old'
);
