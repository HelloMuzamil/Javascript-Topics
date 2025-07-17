// function searchfood(item){


//     console.log("Food is Searching wait");



//    let interval= setInterval(function timer2(){
//         let count =0;
//         for(let i=0;i<5;i++){
//             console.log(".");
//             count++
            
//         }
//         if(count ==5){
//             clearInterval(interval)
//         }
    
//      },3000)

//     setTimeout(function timer1(){
//         console.log(`list of ${item}`);
        
//     },4000)


    
    
// }



// searchfood("Burger");



function searchfood(item) {
    console.log("Food is Searching wait");

    let count = 0;
    let dotInterval = setInterval(() => {
        console.log(".");
        count++;

        if (count === 5) {
            clearInterval(dotInterval);
            // After printing 5 dots, show the food list
            setTimeout(() => {
                console.log(`list of ${item}`);
            }, 1000); // 1 second after dots
        }
    }, 1000); // print one dot every second
}

searchfood("Burger");





// function searchfood(item) {
//     console.log("Food is Searching wait");

//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(".");
//         }, i * 1000);
//     }

//     setTimeout(() => {
//         console.log(`list of ${item}`);
//     }, 6000);
// }

// searchfood("Burger");
