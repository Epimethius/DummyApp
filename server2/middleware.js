const middleware = {};


//Ineffiently sort by randomizing it and checking to see if it is in order
const bogoSort = (arr) => {
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
      function isSorted(array){
        for(let i = 0; i < array.length - 1; i++){
            if(array[i] > array[i + 1]) return false;
        }
        return true;
      }
      let array = shuffle(arr);
      while(!isSorted(array)){
        array = shuffle(array);
      }
      return array;
}

//Ineffienntly run the fib sequence 
const fib = (n) => {
    if (n < 2) return 1;
    return fib(n-1) + fib(n-2);
}

//Ineffiently copy the array for however long it is to take up space in memory
const arrayCopyLengthToTheN = (array) => {
    let copy = array;
    for(let i = 0; i < array.length * array.length; i++){
        copy.concat(copy);
    }
}

//Run an infinite loop to take up processing power
const infiniteLoop = () => {
    console.log('you are in an infinite loop now :(')
    let i = 1; 
    while(i > 0){
        i++;
    }
}

//Repeat the call stack until you exceed call stack limit to break it
const explodeCallStack = (n) => {
    console.log('your call stack will break soon')
    if (n === 0) return 1;
    else return explodeCallStack(n+1) + explodeCallStack(n-1) + explodeCallStack(n);
}

const functions = [fib, bogoSort, arrayCopyLengthToTheN];

//Middleware to run through the different processes to stress the cluster in a variety of ways
middleware.wasteTimeAndSpace = (req, res, next) => {
    const fibnum = Math.floor(Math.random() * 50);
    const sortArr = [...Array(Math.floor(Math.random() * 30))].map(el => Math.floor(Math.random() * 100));
    //console.log(sortArr);
    const spaceArr = Array(Math.floor(Math.random() * 2000));
    const willBreak = (Math.floor(Math.random() * 1000) === 777);
    console.log('willBreak is', willBreak);
    const willLoop = (Math.floor(Math.random() * 1000) === 777);
    if (willBreak) explodeCallStack(2);
    if (willLoop) infiniteLoop();
    const vars = [fibnum, sortArr, spaceArr];
    const i = Math.floor(Math.random() * 3);
    console.log('calling function ', i, 'with a variable of ', vars[i]);
    functions[i](vars[i]);
    return next();
}

module.exports = middleware;