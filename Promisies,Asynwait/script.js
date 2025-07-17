// let promise = new Promise((resolve,reject)=>{
//     console.log("Data is fetch ");

//     // resolve(123)
//     reject("Here is some error")
// }

// )

// function getdata(getid,getnextdata){
// return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     console.log("Dataid ",getid);
//     resolve("Success")
//      if(getnextdata){
//         getnextdata();
//      }
//    },6000)
// })
// }
function aysnfunction(){
   return new Promise( (resolve,reject)=>{
      setTimeout( ()=>{
         console.log("$2500 is transfered to your account");
         resolve("Success")
         
      },4000  )
   }

   )
}
console.log("Sendng money to your account");
let l1=aysnfunction();
l1.then((res)=>{
   console.log(res);
   console.log(("Money is Transferred successfully"));
   
   
})
