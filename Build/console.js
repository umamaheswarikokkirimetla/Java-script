console.log("Hello,World");
console.error("this is an error message")
console.warn("this is a warning message");
console.info('%cThis is a styled info message','color:blue;font-size:16px;font-weight:bold')
console.table([{name: "Amit", age: 30}, {name: "Jatin", age: 25}]);
console.time('timer1')
function loops() {
    for(let i=0;i<=10000;i++) {

    }
}
loops()
console.timeEnd('timer1');
//
console.assert(5>10,'this assertion is failed');
//
console.group('User Information');
console.log('Name:Ritik');
console.log('Age:30');
console.groupEnd();
//
console.count('countLabel1')
console.count('countLabel1')
//console.tracee




