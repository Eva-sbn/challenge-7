
//Твоя задача написать функцию, которая будет работать так же, как и метод find.

// 1 Пример работы find:

const numbers = [4, 5, 6]
// результат: [4, 5, 6]
numbers.find(item => item > 4);
// результат: 5


const numbers = [4,5,6];
 function getNumber(numbers,callback){
    for(let i = 0; i < numbers.length; i++) {
       if(callback(numbers[i])){
          return numbers[i]
    }
}
 }
console.log(getNumber(numbers,(item) =>{
    return item > 4
}))



//А теперь напиши функцию, которая будет работать так же, как и метод map.

// 2 Пример работы map:

const greetings = ["hi", "hello", "how are you"]; 
// результат: ["hi", "hello", "how are you"]
const greetingUppercase = greetings.map(item => item.toUpperCase());
// результат:  ["HI!", "HELLO!", "HOW ARE YOU!"]


const greetings = ["hi", "hello", "how are you"];
 function getArr(greetings,callback){
    const newArr = [];
 for(let i = 0; i < greetings.length; i++) {
     if(callback(greetings[i])) {
        newArr.push(callback(greetings[i]))
     }
 }
   return newArr
}
console.log(getArr(greetings,(item => {

 return item.toUpperCase()
})))

// 3 Пример работы filter:

const numbers = [4, 5, 6]
// результат: [4, 5, 6]
numbers.filter(item => item < 6);
// результат: 4, 5 


const numbers = [4,5,6]
function fltr(numbers, callback){
    let newArr = [];
     for (let i = 0; i < numbers.length; i++) {
        if (callback(numbers[i])) {
          newArr.push(numbers[i]);
     }
      }
       return newArr;
     }
    console.log(fltr(numbers, (item) => {
       return item < 6
     }))


     // 4 Реализация метода reduce

     //Пример работы reduce:

     const numbers = [10, 32, 12];
      // результат: [10, 32, 12]
      numbers.reduce((sum, item) => item + sum);
      // результат: 54



      const numbers = [10, 32, 12];
      function rdc2(numbers,sum,callback){
        let  total = sum
            for (let i = 0; i < numbers.length; i++) {
                total += numbers[i]
        }
        return callback(total)
    } 
    console.log(rdc2(numbers,0,(item) => {
       return item
    }))







