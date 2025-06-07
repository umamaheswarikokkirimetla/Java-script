// const person = {
//     name: 'GFG',
//     greet: function() {
//         console.log('Hello, ' + this.name);
//     }
// };
// const greet = person.greet;
// greet();

//binding
// const person = {
//     name : 'GFG',
//     greet : function() {
//         console.log('Hello'+this.name);
//     }
// }
// const greet=person.greet;
// const greetbind=greet.bind(person);
// greetbind();

//call method
// const person= {
//     name:'GFG',
//     greet: function(city) {
//         console.log('Hello '+this.name+'from '+city)
//     }
// }
// person.greet('Delhi');
// const greet=person.greet;
// greet.call(person,'Noida')

//apply method
// const person = {
//     name:'GFG',
//     greet:function(city,country) {
//         console.log('Hello'+this.name+'from'+city+','+country);
//     }
// }
// person.greet('delhi','India')
// const greet=person.greet;
// greet.apply(person,['Noida','India'])

//arrow function
const person = {
    name:'GFG',
    greet:function() {
        const arrowGreet = () => {
            console.log('Hello '+this.name);
        };
        arrowGreet();
    }
};
person.greet();


