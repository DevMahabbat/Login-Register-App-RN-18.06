import { log } from "console"

const axios = require('axios')



type Geo = {
    lat: string,
    lng : string
}

type Company={
    name: string,
    catchPhrase: string,
    bs: string
}
type Address = {
    street: string,
    suite : string,
    city: string,
    zipcode : string,
    geo : Geo
}
type User ={
    id : number,
    name: string,
    email : string,
    address : Address,
    phone: string,
    website : string,
    company: Company,
}

async function logUsers(): Promise<User[]>{
    let users : User[] = (await axios.get('https://jsonplaceholder.typicode.com/users')).data
    console.log(users)
   return users
}

let k = logUsers().then(data=>{
    console.log(data[0].address.geo.lat);
})
