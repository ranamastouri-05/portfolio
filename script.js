import {calculaverage, ispassed} from "./calcul.js";
console.log(calculaverage(14,18));
console.log(ispassed(15));



//lkol nal9aweh fl console 
console.log("hello,world");//bich naamlou affichage mtaa hello world
console.log(typeof(2.3));
var person1 = { //creation mtaa person 1 (naatiweh maaloumet)
    name:"jaafer",
    age: 40,
    isStudent: false,
}
console.log(person1); //bich nwariyou chnouwa fama f person (naarfou chnouwa fih)
console.log(typeof(person1.isStudent));//type of isstudent
console.log(person1.name);//bich taaml affichage il name
console.log(7!="7");//affichage taa l conditions ken 7 w"7" knhom diff ou non
let numbers =[10,5,14,3,20,11];//numbers hiya liste bkolha ili feha les numeros
let sum =0;
let i = 0;
while (i<numbers.length){ //codition ki tebda i asgher mn toul mtaa liste 
    sum += numbers[i];//numbers[i] numbers[0]=10
    i++;
}
console.log("nb d'iteration=",i);//bch nchoufo 9deh fama mn aadad f liste
console.log("somme=",sum);//bich nchoufo somme taa les nombres lmwjoudin f liste
let j =2;
do {//hne aaml loperation w baad chef lcondition w kn l9aha ghalta yaawedch 
    console.log(j);
    j++;//++ = +1
} while (j<5);

const students = [
    {name:"amine",grade:19},
    {name:"sarra",grade:10},
    {name:"mohamed",grade:15},
    {name:"takwa",grade:8},
    {name:"sarra",grade:16},
]

const students_objet = 
    {name:"amine",grade:19}

// const name=students_objet.name;
// const grade= students_objet.grade;

const {name,grade} = students_objet  ;
console.log(name,grade);

const admitted = students.map(student =>
    student.grade >= 10 ? `${student.name} admis` : `${student.name} refuse`
);

console.log(admitted);


// const admitted=
//     students.grade >= 10 ? "admis" : "refuse";

// console.log(admitted);

// const sarra = students.find( 
//     students => students.name === "sarra"
// );

// const sarra = students.find( 
//     students => students.name ==="sarra" && students.grade ===16
// );
//  console.log(sarra);

// function sarra (students) {
//     const sarra =students.find( 
//     students=> students.name==="sarra" && students.grade ===6);
//     return sarra
// }
// console.log(sarra(students))
// students.forEach(students =>{
// console.log(students.name);
// });
// students.forEach(students =>{
// console.log(students.grade);
// });
// students.forEach(students =>{
// console.log(students.name,"is",students.grade,"grade");
// });

// const admitted=students.filter(
//     students=>students.grade >= 10 
// );
// console.log(admitted)
// students=>students.grade <= 10 
// );
const total = students.reduce(
    (acc,s)=> acc + s.grade , 0

);
console.log ("total:",total)
const average = total/ students.length;
console.log("average:",average)

const first =[1,2,3];
const second=[4,5,6];
const all =[...first,...second];
console.log(all);

const student = {namer:"sarra",grade:18}
const upadatedstudent={
    ...student,
    grade:20
};
console.log(upadatedstudent);
console.log(student);






