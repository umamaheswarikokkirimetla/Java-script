//1.Arithmatic
// const sum=5+3;
// const diff=10-2;
// const p=4*2;
// const q=8/2;
// console.log(sum,diff,p,q);

//2.Assignment
let n=10;
n += 5;
n*= 2;
console.log(n);
//3.comparsion
console.log(10 > 5);
console.log(10 ==="5")
//4.logical
const a=true,b=false;
console.log(a && b);
console.log(a || b);
//5.Bitwise
const res=5 & 1;
console.log(res);
//6.Ternary 
const age=18;
const res1= age >=18 ? "Adult":"Minor";
console.log(res1);
//7.comma
let n1=1,n2
const res2=(n1=1,n2=2,n1+n2)
console.log(res2);
//8.unary
let x=5;
console.log(++x);
console.log(x--);
//9.Relational
const obj={length : 10};
console.log("length" in obj);
console.log([] instanceof Array)
//10.big int
const big1=123;
const big2=456;
console.log(big1+big2);
//11.string
const s="Hello"+" "+"world";
console.log(s);
//12.changeing
const obj1={name:"aman",address:{city:"delhi"}};
console.log(obj1.address?.city);
console.log(obj1.contact?.phone);


