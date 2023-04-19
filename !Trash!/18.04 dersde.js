// let url = 'https://643d0774f0ec48ce904fcb4e.mockapi.io/todo'
// const { default: axios } = require("axios");
// const { log } = require("console");
// const readline  = require("readline-sync");

const { default: axios } = require("axios")
const { log } = require("console")
const { get } = require("http")



// const choices = ["Show All Todos","Show Uncompleted Todos","Mark as Done","Add Todo","Delete A Todo",]

// let axiosInstance  = axios.create({
//     baseURL: 'https://643d0774f0ec48ce904fcb4e.mockapi.io',
//     headers: {"Content-Type" : "Application/json"},
//     timeout: 1500
// })

// Main()
// async function Main(){
// let answer = readline.keyInSelect(choices);
// answer++;   
// switch(answer){
//     case 1:
//         await showAllTodos();
//         break;
//     case 2:
//         await showUncompleted()
//         break;
//     case 3:
//          markAsDone()
//         break;
//     case 4:
//          addTodo()
//         break;
//     case 5:
//        deletetodo()
//         break;
//     case 0:
//         log("Program Finished")
//         break;

//     default:
//         log("Please select a valid operation ")

//         break;

//         1

// }
// if(answer != 0){
//     setTimeout(()=>{
//         Main()
//     },500);

// }
// }
// async function showAllTodos(){
//     // let data = await fetch('https://643d0774f0ec48ce904fcb4e.mockapi.io/todo');
//     // let datajson  = await data.json();
//     // console.log(datajson)
//     let k = await axiosInstance.get("/todo")
//     log(k.data)
    
// }

// async function  showUncompleted(){
//     // let data = fetch('https://643d0774f0ec48ce904fcb4e.mockapi.io/todo');
//     // let datajson  =  data.json();
//     // datajson.forEach(element => {
//     //     if(! element.completed){
//     //         log(element)
//     //     }
//     // });



// //     await axios.get("https://643d0774f0ec48ce904fcb4e.mockapi.io/todo").then(data=>{
// //         return data.data
// //     }).then(data1=>{
// //         data1.forEach(element => {
// //                 if(! element.completed){
// //                     log(element)
// //                 }
// //             });
// //     })
// let data1 =await axiosInstance.get("/todo");

// data2 = data1.data;
//  data2.forEach(element => {
//                     if(! element.completed){
//                         log(element)
//                     }
//                 });
// }
// async function markAsDone(){
//     let userid = readline.questionInt("Enter User Id to Mark as Done or UnCompleted: ")
//     let done = Boolean(readline.keyInYN("Choose y if U wanna set Completed\n Choose n if U wanna set Uncompleted: "))
//     done= done ? true : false
   
// //  let res = fetch(`https://643d0774f0ec48ce904fcb4e.mockapi.io/todo/${userid}`, {
// //         method: 'PUT', 
// //         headers: {'content-type':'application/json'},
// //         body: JSON.stringify({completed: done})
// //       })

// //       let jsondata =  res.json()
// //       log(jsondata)
//     axios.put(`https://643d0774f0ec48ce904fcb4e.mockapi.io/todo/${userid}`,{"completed": done})
// }
// async function deletetodo(){
//     let todoid = readline.questionInt("Enter User Id to delete: ")
// // let data =   fetch(`https://643d0774f0ec48ce904fcb4e.mockapi.io/todo/${todoid}`, {
// //   method: 'DELETE',
// // })
// // let jsond =  data.json()
// // log(jsond)
//     await axios.delete(`https://643d0774f0ec48ce904fcb4e.mockapi.io/todo/${todoid}`).then(data=>{
//         return data.data
//     }).then(data1=>{log(data1)})

// }

// async function addTodo(){
//     let title = readline.question("Enter title: ")
//     let completed = readline.keyInYN("Is the Todo Completed Yes/No (y/n): ")
//     let obj = {
//         "title": title,
//         "completed" : completed  
//       }
//     // let json = JSON.stringify(obj)
    
//     //   let data  = fetch("https://643d0774f0ec48ce904fcb4e.mockapi.io/todo",{
//     //     method : "POST",
//     //     headers: {'content-type':'application/json'},
//     //     body: json
//     //   })
//     //   let dataobj =  data.json()
//     //   log(dataobj)
//     await axios.post("https://643d0774f0ec48ce904fcb4e.mockapi.io/todo",obj).then(data=>{
//         log(data.data)
//     })
      
// }

/// task

// const axiosInstance  =axios.create({
//     baseURL: "https://northwind.vercel.app/api",
//     headers: {"Content-Type": "Application/json"},
//    timeout:2000,
// })
async function main(){
    await getall();
    await ortalama();
    await cbaslayan();
}
async function getall(){
    let res =await axios.get("https://northwind.vercel.app/api/products")
    let products = await res.data

//     let qiymet= 0
//     products.forEach(element => {
//         if( element.unitPrice >qiymet){
//             qiymet= element.unitPrice
//         }
//     })
//    let enbaha = products.find(a=> a.unitPrice == qiymet)
//    log(enbaha)

    let k = products.reduce((a,b)=>
        a.unitPrice > b.unitPrice ? a : b
    )
    log(k)
    log("1 bitdi _------------------------")
}


async function ortalama(){
    let data =await axios.get("https://northwind.vercel.app/api/products")
    let data1 = await data.data
    log(data1.length)
    let qiymet= 0
    let say = 0
    data1.forEach(element => {
     qiymet +=element.unitPrice;
     say++
    })
    log(qiymet/say)
   log("2 bitdi _------------------------")
}

async function cbaslayan(){
    let data =await axios.get("https://northwind.vercel.app/api/products")
    let data1 = await data.data
    let datas = []
    let qiymet= 0
    let say = 0
    data1.forEach(element => {
     let name = String(element.name)
     name[0] = name[0].toUpperCase() 
     
     if(name.startsWith('C')){
        datas.push(element)
      log(name)
     }
    // log(datas)
    })

   log("3 bitdi _------------------------")
}
main()

// axios.get("https://northwind.vercel.app/api/products").then(res=>{
//     let k = res.data
//     let enbaha ={}
//     enbaha = k.reduce((a,b)=>{
//         a.unitPrice < b.unitPrice ? a : b
//     })
// })
Array().sort()

async function GetMostExpenciveItem() {
    const response = await instance.get();
    let filterData = await response.data.sort(
      (a, b) => b.unitPrice - a.unitPrice
    );
    console.log(filterData[0]);
  }