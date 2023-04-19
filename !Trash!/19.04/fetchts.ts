import axios from "axios";



const readline = require("readline-sync");
let axiosIntance  = axios.create({
    baseURL: 'https://northwind.vercel.app/api'
})

const choices: string[] = ["Add Customer","Delete Customer"]




Main()
async function Main(){
let answer = readline.keyInSelect(choices);
answer++;   
switch(answer){
    case 1:
        await addCustomer();
        break;
    case 2:
        await deleteCustomer()
        break;
    case 3:
    
        break;
    case 4:
 
        break;
    case 5:

        break;
    case 0:

        break;

    default:
        console.log("Please select a valid operation ")

        break;

        

}
if(answer != 0){
    setTimeout(()=>{
        Main()
    },500);

}
}
type Address ={
    
        street: string,
        city: string,
        region?: string|null,
        postalCode: string,
        country: string,
        phone: string
      
}
type Customer = {
    id: string,
    companyName: string,
    contactName: string,
    contactTitle: string,
    address: Address
  }

async function addCustomer() {
    let id = readline.question("Enter id: ")
    let companyName=  "Məhəbbətin batmış şirkəti"
    let contactName = "Thomas Hardy"
    let contactTitle =  "Sales Representative";
    
    let street ="120 Hanover Sq.";
    let city =  "London";
    let region = null
    let postalCode = "WA1 1D"
    let country= "UK";
    let phone ="(171) 555-7788";
    let adrss : Address= {
        street: street,
        city: city,
        region: region,
        postalCode: postalCode,
        country: country,
        phone: phone
       } 
    let newCustomer : Customer= {
        id: id,
    companyName: companyName,
    contactName: contactName,
    contactTitle: contactTitle,
    address: adrss
    }
    

    let datas : Customer[]= (await (axiosIntance.post("customers",newCustomer))).data 
    console.log(datas)
}
async function deleteCustomer() {
    let id: string =  readline.question("Enter User id")
    let response =(await axiosIntance.delete(`customers/${id}`))
    if(response.status==200){console.log(`Customer (ID: ${id}) deleted!`);}
    else{console.log("Not deleted!");}

}

