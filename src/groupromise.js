
// function  Walkdog() {

//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const walk=true;
//             if (walk) {
//                 resolve("You walked the dog");
                
//             } else {
//                 reject("You DIDN'T walk the dog");
                
//             }
//         },2000);

//     });
// }

// function cleanKitchen() {
//     return new Promise((resolve,reject) => {
//         setTimeout( () => {
//             const kitchen=false;
//             if (kitchen) {
//                 resolve("You cleaned the kitchen");
                
//             } else {
//                 reject("You DIDN'T clean the kitchen");
                
//             }
//         },1500);

//     })
    
// }
// function outTrash(){
//     return new Promise((resolve,reject) =>{
//         setTimeout( () => {
//             const trash=true;
//             if (trash) {
//                 resolve("You took out the trash");
                
//             } else {
//                 reject("You DIDN'T take out the trash");
                
//             }
//         },1000);

//     })

// }
// // Method Chaining.
// Walkdog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return outTrash()})
//          .then(value =>{console.log(value); console.log("You have successfully completed your tasks")}) 
//          .catch( error => console.error(error)
//          )

