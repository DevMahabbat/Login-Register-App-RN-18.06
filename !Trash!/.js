const { log } = require("console");
const data  ={completed: true}

// fetch(`https://643d0774f0ec48ce904fcb4e.mockapi.io/tasks/3`, {
//     method: 'PUT', 
//     headers: {'content-type':'application/json'},
//     body: JSON.stringify(data)
//   }).then(res => {
    
//         return res.json();
  
//   }).then(data=> {
//         log(data)
//   }).catch(error => {
//     log(error)
//   })
// const data2 = {title:"Hello",completed: true}
//   fetch(`https://643d0774f0ec48ce904fcb4e.mockapi.io/tasks`, {
//     method: 'POST', 
//     headers: {'content-type':'application/json'},
//     body: JSON.stringify(data2)
//   }).then(res => {
    
//         return res.json();
  
//   }).then(data=> {
//         log(data)
//   }).catch(error => {
//     log(error)
//   })

fetch('https://643d0774f0ec48ce904fcb4e.mockapi.io/todo/15', {
  method: 'DELETE',
}).then(res => {
      return res.json();
}).then(task => {
 log(task)
})