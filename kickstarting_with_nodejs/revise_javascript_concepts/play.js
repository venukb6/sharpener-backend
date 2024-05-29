//1. Write an arrow function which returns the product of two numbers

//first method
// const productOfTwoNumbers = (a,b) =>{
//     return a*b
// }

//second method
// const productOfTwoNumbers = (a, b) => a*b

// console.log(productOfTwoNumbers(3,2))


//2. create a student object

const student = {
    name: "venu",
    age: 23,
    greet(){
        console.log(`Hi, I am ${this.name}`)
    }
}

student.greet()