/* alert('Hello!'); */
/* const result = confirm("Are you here?");
console.log(result); */

/* const answer = prompt("Вам есть 18 лет?", "18");
console.log(answer + 5); */

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = +prompt('Сколько вам лет?', '');
answers[2] = +prompt('Сколько вы ростом', '');
/* console.log(answers); */
document.write(answers);
console.log(typeof(null));

const category = "toys";
console.log(`https//someurl/${category}/5`);

console.log(typeof(5 + 'string'));

let incr = 10,
    dect = 10;

incr++;
dect--;

console.log(incr);
console.log(dect);

console.log(5%2);
console.log(2*4 === '8');
